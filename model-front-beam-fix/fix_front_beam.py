from pathlib import Path
import struct,json,copy,hashlib,numpy as np
ROOT=Path(__file__).resolve().parent.parent;OUT=Path(__file__).resolve().parent

def read(raw):
 l=struct.unpack_from('<I',raw,12)[0];g=json.loads(raw[20:20+l]);bl=struct.unpack_from('<I',raw,20+l)[0];return g,bytearray(raw[28+l:28+l+bl])
def array(g,b,k):
 a=g['accessors'][k];v=g['bufferViews'][a['bufferView']];n={'VEC3':3,'VEC2':2,'SCALAR':1}[a['type']];return np.frombuffer(b,dtype='<f4',offset=v.get('byteOffset',0)+a.get('byteOffset',0),count=a['count']*n).reshape(-1,n).copy()
def fix(source,dest):
 old=source.read_bytes();g,b=read(old);before=copy.deepcopy(g);oldbin=bytes(b)
 node=next(n for n in g['nodes'] if n['name']=='front_edge_rod');mesh=g['meshes'][node['mesh']];pr=mesh['primitives'][0];p=array(g,b,pr['attributes']['POSITION']);oldp=p.copy()
 # The front crosspiece is supported on the two existing post tops, directly above the cloth roller.
 # Dimensions are a proportional reconstruction from the supplied photos, not a claimed museum measurement.
 p[:,0]*=1.45/1.34;dy=p[:,1]-1.315;dz=p[:,2]-.705;radius=np.maximum(np.abs(dy),np.abs(dz));edge=radius>1e-6
 p[:,1]=1.3825;p[:,2]=.780
 p[edge,1]+=(dy[edge]/radius[edge])*.0225;p[edge,2]+=(dz[edge]/radius[edge])*.045
 tri=p.reshape(-1,3,3);nn=np.cross(tri[:,1]-tri[:,0],tri[:,2]-tri[:,0]);nn/=np.maximum(np.linalg.norm(nn,axis=1,keepdims=True),1e-12);norm=np.repeat(nn,3,axis=0).astype('<f4')
 def append(a):
  b.extend(b'\0'*(-len(b)%4));offset=len(b);data=a.astype('<f4').tobytes();b.extend(data);g['bufferViews'].append({'buffer':0,'byteOffset':offset,'byteLength':len(data),'target':34962});acc={'bufferView':len(g['bufferViews'])-1,'componentType':5126,'count':len(a),'type':'VEC3','min':a.min(0).tolist(),'max':a.max(0).tolist()};g['accessors'].append(acc);return len(g['accessors'])-1
 pr['attributes']['POSITION']=append(p.astype('<f4'));pr['attributes']['NORMAL']=append(norm)
 node['extras']['label']='卷布轴正上方前横梁';node['extras']['note']='按用户提供的正视实物图修正为方木横梁；两端落在现有前立柱顶面，位于卷布滚轴正上方。'
 g['buffers'][0]['byteLength']=len(b);j=json.dumps(g,ensure_ascii=False,separators=(',',':')).encode();j+=b' '*(-len(j)%4);b+=b'\0'*(-len(b)%4)
 out=struct.pack('<III',0x46546c67,2,28+len(j)+len(b))+struct.pack('<II',len(j),0x4e4f534a)+j+struct.pack('<II',len(b),0x004e4942)+b;dest.write_bytes(out)
 changed=[]
 for n,o in zip(g['nodes'],before['nodes']):
  if n!=o or ('mesh'in n and g['meshes'][n['mesh']]!=before['meshes'][o['mesh']]):changed.append(n['name'])
 assert changed==['front_edge_rod'],changed
 assert bytes(b[:len(oldbin)])==oldbin
 assert g['materials']==before['materials'] and g['images']==before['images'] and g['textures']==before['textures']
 assert abs(float(p[:,1].min())-1.36)<1e-5
 # The beam overlaps both cheeks of each existing axle saddle, rather than floating over the saddle gap.
 assert float(p[:,2].min())<.7515 and float(p[:,2].max())>.8085
 assert abs(float(p[:,2].min()+p[:,2].max())/2-.78)<1e-5
 return {'source':source.name,'output':dest.name,'changed_nodes':changed,'other_65_nodes_unchanged':True,'original_binary_bytes_unchanged':True,'materials_textures_unchanged':True,'old_bounds':[oldp.min(0).tolist(),oldp.max(0).tolist()],'new_bounds':[p.min(0).tolist(),p.max(0).tolist()],'roller_clearance':round(float(p[:,1].min())-1.322,4),'sha256':hashlib.sha256(out).hexdigest()}
reports=[]
for n in ['kesi_loom_peony_web.glb','kesi_loom_peony.glb']:
 reports.append(fix(ROOT/'kesi_peony_v9'/n,OUT/n))
(OUT/'verification.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2));print(json.dumps(reports,ensure_ascii=False,indent=2))
# Existing self-contained viewer: substitute only the GLB payload.
import base64
src=(ROOT/'kesi_peony_v9/loom-peony.html').read_text();old64=base64.b64encode((ROOT/'kesi_peony_v9/kesi_loom_peony_web.glb').read_bytes()).decode();new64=base64.b64encode((OUT/'kesi_loom_peony_web.glb').read_bytes()).decode()
assert src.count(old64)==1,src.count(old64)
updated=src.replace(old64,new64);(OUT/'loom-v8.html').write_text(updated)
def blob_sha(x):return hashlib.sha1(b'blob '+str(len(x)).encode()+b'\0'+x).hexdigest()
print('original viewer Git blob',blob_sha(src.encode()),'new viewer chars',len(updated))
