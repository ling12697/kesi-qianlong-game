/* One roof-anchored information group per household. No pending-repair voyage note. */
const v37VoyageBefore=v25VoyageMarkup;
v25VoyageMarkup=function(){let html=v37VoyageBefore();return html.replace(/<aside class="v28-ship-note">[\s\S]*?<\/aside>/,'')};
/* Paved lane centres in the approved 1672 x 941 map, with stops outside entrances. */
const v37Endpoints={g:[23.2,44.5],shop:[33.2,75.9],hub:[58.4,76.6],south:[56.8,74.3],bend:[76.9,62.9],north:[73.5,60.5],east:[75.1,43.8],dock:[77.5,81.1]};
const v37Chains=[
 ['g',[23.2,48],[23.2,51.8],[21.5,53.4],[19.6,55.1],[18.4,57.1],[18.2,59.7],[18.7,62],[18.5,64.3],[18.5,66.7],[18.8,69],[19.5,71.1],[21.2,73.2],[24.3,74.8],[28.5,75.6],'shop'],
 ['shop',[37,76.3],[41,76.6],[45,76.9],[49.4,77],[53.8,76.8],'hub'],
 ['hub',[56.8,75.7],'south'],
 ['hub',[62,76.4],[65.1,75.6],[67.6,74.6],[69.2,73.2],[69.8,71.6],[69.1,69.8],[68.5,68],[69.4,66.5],[71.9,65.4],[74.6,64.2],'bend'],
 ['bend',[75.8,62.1],[74.7,61.2],'north'],
 ['bend',[79.8,61.9],[82.4,60.5],[84.4,58.6],[86,56.4],[86.6,54],[86.3,51.8],[85.4,49.3],[84,47.2],[82,45.3],[79.8,44.1],[77.3,43.7],'east'],
 ['hub',[62.6,76.6],[66.8,76.7],[70.7,77.2],[73.8,78.1],[75.4,79.4],[76.6,80.4],'dock']
];
for(const k of Object.keys(roadNodes))delete roadNodes[k];Object.assign(roadNodes,v37Endpoints);roadLinks.splice(0);
v37Chains.forEach((chain,c)=>{let prev;chain.forEach((p,i)=>{const key=typeof p==='string'?p:`v37_${c}_${i}`;if(Array.isArray(p))roadNodes[key]=p;if(prev)roadLinks.push([prev,key]);prev=key})});
handsDoors.splice(0,3,roadNodes.south,roadNodes.north,roadNodes.east);roadClear();
/* Foreground roofs, walls and branches occlude the actor; his feet stay on lane centres. */
const v37Masks=[...v36Occluders,'19.8,60 22.8,60 24,62.5 22.5,66.2 20.7,66.2 20,63','25,65 27.5,65 28.5,68 28,71.4 26.3,72 24.8,69','42.6,61 46.4,60.5 48.9,64 49.5,69.5 48,74 46.6,76 43.9,75 43,70','64,61 66,61 67.3,64.4 66.1,67 64.6,66.6','79.5,55.8 82,55.1 83.4,56.7 83,59.1 81.5,60.3 80,59','84.1,51 86,50.8 86.8,52 86.6,54 85.5,54.6'];
function v37Mask(){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="white"/>'+v37Masks.map(p=>'<polygon points="'+p+'" fill="black"/>').join('')+'</svg>')+'")'}
const v37RenderBefore=easyRender;
easyRender=function(){v37RenderBefore();if(s.ch!==0)return;const scene=document.querySelector('.easy-scene');if(!scene||courtView())return;scene.classList.add('v37-roof-info');const road=scene.querySelector('.road-layer');if(road){road.style.maskImage=v37Mask();road.style.webkitMaskImage=v37Mask()}
 const positions=[[56.8,59.3],[62.9,42],[74.4,28.5]];
 if(easy.step>=2&&easy.step<=5&&scene.dataset.bossView==='map')scene.querySelectorAll('.easy-place[data-easy-worker]').forEach(el=>{const w=+el.dataset.easyWorker;if(w<0)return;const group=document.createElement('div');group.className='v37-roof-group';group.style.left=positions[w][0]+'%';group.style.top=positions[w][1]+'%';el.before(group);group.append(el);el.style.removeProperty('left');el.style.removeProperty('top');scene.querySelectorAll('.house-work').forEach(work=>{const i=+work.dataset.order;if(workshop().orders[i]?.worker===w)group.append(work)})});
 scene.querySelectorAll('.hands-door-state>small').forEach(el=>el.remove());
};
easyRender();
