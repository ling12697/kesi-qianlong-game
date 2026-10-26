from pathlib import Path
import struct,json,copy,hashlib,base64,gzip
import numpy as np
import trimesh
ROOT=Path(__file__).resolve().parent.parent;OUT=Path(__file__).resolve().parent
SRC=ROOT/'kesi_model_front_beam_fix'
def read(raw):
 l=struct.unpack_from('<I',raw,12)[0];g=json.loads(raw[20:20+l]);bl=struct.unpack_from('<I',raw,20+l)[0];return g,bytearray(raw[28+l:28+l+bl])
def arr(g,b,k):
 a=g['accessors'][k];v=g['bufferViews'][a['bufferView']];n={'VEC3':3,'VEC2':2}[a['type']];return np.frombuffer(b,dtype='<f4',offset=v.get('byteOffset',0)+a.get('byteOffset',0),count=a['count']*n).reshape(-1,n).copy()
def box(lo,hi):
 lo=np.array(lo);hi=np.array(hi);m=trimesh.creation.box(hi-lo);m.apply_translation((lo+hi)/2);return m
reports=[]
for filename in ['kesi_loom_peony_web.glb','kesi_loom_peony.glb']:
 raw=(SRC/filename).read_bytes();g,b=read(raw);prev=copy.deepcopy(g);oldbin=bytes(b);report={}
 def append(a):
  a=np.asarray(a,dtype='<f4');b.extend(b'\0'*(-len(b)%4));offset=len(b);b.extend(a.tobytes());g['bufferViews'].append({'buffer':0,'byteOffset':offset,'byteLength':a.nbytes,'target':34962});g['accessors'].append({'bufferView':len(g['bufferViews'])-1,'componentType':5126,'count':len(a),'type':'VEC'+str(a.shape[1]),'min':a.min(0).tolist(),'max':a.max(0).tolist()});return len(g['accessors'])-1
 for name in ['front_edge_rod','post_L_front','post_R_front']:
  node=next(n for n in g['nodes'] if n['name']==name);p=g['meshes'][node['mesh']]['primitives'][0];v=arr(g,b,p['attributes']['POSITION']);uv=arr(g,b,p['attributes']['TEXCOORD_0']);oldv=v.copy()
  if name=='front_edge_rod':
   # Visible rail ends enter the post interiors and no longer protrude over the outer faces.
   v[:,0]*=.645/.725
   normal=arr(g,b,p['attributes']['NORMAL'])
   node['extras']['note']='按新增接头特写：横木两端嵌入前立柱内侧槽口，外侧不露头；隐藏榫卯形式和尺寸未作实测断言。'
  else:
   source=trimesh.Trimesh(vertices=v,faces=np.arange(len(v)).reshape(-1,3),process=True)
   assert source.is_watertight,(name,'source not closed')
   lo=oldv.min(0);hi=oldv.max(0)
   # Extend only the local post head; preserve original shaft saddle below the rail.
   cap=box([lo[0],1.33,lo[2]],[hi[0],1.412,hi[2]])
   solid=trimesh.boolean.union([source,cap],engine='manifold')
   if name=='post_L_front':cut=box([-.645,1.36,.735],[-.574,1.405,.825])
   else:cut=box([.574,1.36,.735],[.645,1.405,.825])
   solid=trimesh.boolean.difference([solid,cut],engine='manifold')
   assert solid.is_watertight and solid.volume>0
   v=np.asarray(solid.vertices)[solid.faces].reshape(-1,3)
   normal=np.repeat(solid.face_normals,3,axis=0)
   # Transfer existing wood UV coordinates by nearest original triangle and barycentric interpolation.
   oldmesh=trimesh.Trimesh(vertices=oldv,faces=np.arange(len(oldv)).reshape(-1,3),process=False)
   nearest,dist,tid=trimesh.proximity.closest_point_naive(oldmesh,v)
   weights=trimesh.triangles.points_to_barycentric(oldv.reshape(-1,3,3)[tid],nearest)
   uv=(uv.reshape(-1,3,2)[tid]*weights[:,:,None]).sum(1)
   node['extras']['note']='仅修正前横木接头附近柱头，内侧实际开槽容纳横木；滚轴轴口与下方柱身保留。隐藏榫卯形式和尺寸未证实。'
   # Open cavity is real geometry, not overlapping solid material.
   inter=trimesh.boolean.intersection([solid,cut],engine='manifold')
   assert inter.volume<1e-9
   report[name]={'watertight':True,'mortise_void_verified':True,'head_top':1.412,'rail_top':1.405,'end_insertion':.070,'solid_overlap_volume':float(inter.volume)}
  for key,a in [('POSITION',v),('NORMAL',normal),('TEXCOORD_0',uv)]:p['attributes'][key]=append(a)
  report[name]={**report.get(name,{}),'bounds':[v.min(0).tolist(),v.max(0).tolist()]}
 changed=[n['name'] for n,o in zip(g['nodes'],prev['nodes']) if n!=o or g['meshes'][n['mesh']]!=prev['meshes'][o['mesh']]]
 assert sorted(changed)==sorted(['front_edge_rod','post_L_front','post_R_front'])
 assert bytes(b[:len(oldbin)])==oldbin
 assert g['materials']==prev['materials'] and g['images']==prev['images']
 g['buffers'][0]['byteLength']=len(b);j=json.dumps(g,ensure_ascii=False,separators=(',',':')).encode();j+=b' '*(-len(j)%4);b+=b'\0'*(-len(b)%4)
 out=struct.pack('<III',0x46546c67,2,28+len(j)+len(b))+struct.pack('<II',len(j),0x4e4f534a)+j+struct.pack('<II',len(b),0x004e4942)+b;(OUT/filename).write_bytes(out)
 reports.append({'file':filename,'changed_nodes':changed,'other_63_nodes_unchanged':True,'materials_textile_unchanged':True,'checks':report,'sha256':hashlib.sha256(out).hexdigest()})
(OUT/'verification.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2))
src=(SRC/'loom-v8.html').read_text();old64=base64.b64encode((SRC/'kesi_loom_peony_web.glb').read_bytes()).decode();new64=base64.b64encode((OUT/'kesi_loom_peony_web.glb').read_bytes()).decode();assert src.count(old64)==1
html=src.replace(old64,new64);(OUT/'loom-v8.html').write_text(html);(OUT/'viewer.html.gz').write_bytes(gzip.compress(html.encode()));print(json.dumps(reports,ensure_ascii=False,indent=2))
