/* A consistent late-winter journey; direct post-repair transition. */
const v36RepairBefore=v25Repair;
v25Repair=function(){const f=v25Flaw();if(easy.step!==8||easy.capital||f.repaired||!v28RepairState().open)return;v36RepairBefore();v28RepairState().open=false;easySave();easyRender()};
const v36VoyageBefore=v25VoyageMarkup;
v25VoyageMarkup=function(){let html=v36VoyageBefore();if(v28RepairState().open)return html.replace('拖针至松纬处 · 修整一次','拖针至松纬处并修整').replace(/<footer class="v26-repair-footer">[\s\S]*?<\/footer>/,'').replace(/<button class="v28-back-to-river"[\s\S]*?<\/button>/,'');if(v25Flaw().repaired)html=html.replace(/<button class="v28-open-cloth[\s\S]*?<\/button>/,'');return html};
/* Remove the legacy colored defect overlay, retaining the subdued actual loose weft. */
const v36PanelBefore=silkPanel;
silkPanel=function(i,defect=false){return v36PanelBefore(i,defect).replace(/<path\b[^>]*class="detail-defect"[^>]*\/?>(?:<\/path>)?/g,'')};
/* Delivery footpaths follow the paved lane centres and approach each threshold from the road. */
const v36Endpoints={g:[23.2,44],shop:[33,76.8],hub:[58.5,78],south:[56.8,75.3],bend:[76.3,63.6],north:[73.2,60],east:[74.6,41.7],dock:[77.8,81.4]};
const v36Chains=[
 ['g',[23.2,48],[23.2,52],[21.2,54],[19.4,55.6],[18.3,58],[18.2,61.4],[19.2,65],[21,68.9],[23,72.4],[27,75.5],'shop'],
 ['shop',[37,77.2],[41,77.7],[45.5,78.1],[49.5,78.3],[54,78.1],'hub'],
 ['hub',[56.8,77],'south'],
 ['hub',[62,77.9],[65.5,77],[68,75.9],[69.6,74.3],[70.1,72.5],[69.7,70.8],[68.7,69],[68.6,67.4],[71,66.4],[73.7,65],'bend'],
 ['bend',[75.5,62.4],[74.1,61.2],'north'],
 ['bend',[79.3,62.3],[82,60.9],[84.3,59],[86,56.6],[86.5,54.2],[86.2,51.5],[85.2,48.7],[83.4,46],[81.3,43.8],[78.7,42.4],'east'],
 ['hub',[62.5,78.2],[66.5,78.2],[70.6,78.6],[74,79.2],[76,80.4],'dock']
];
for(const k of Object.keys(roadNodes))delete roadNodes[k];Object.assign(roadNodes,v36Endpoints);roadLinks.splice(0);
v36Chains.forEach((chain,c)=>{let prev;chain.forEach((p,i)=>{const key=typeof p==='string'?p:`v36_${c}_${i}`;if(Array.isArray(p))roadNodes[key]=p;if(prev)roadLinks.push([prev,key]);prev=key})});
handsDoors.splice(0,3,roadNodes.south,roadNodes.north,roadNodes.east);roadClear();
const v36Occluders=['21,55 36,55 39,61 41,65 39,69 22,69','49,59 62,58 66,65 64,69 50,69','52,42 66,42 69,47 68,52 56,54','65,28 78,28 82,34 79,39 68,39','43,62 46,61 49,66 49,73 47,76 44,75','80,57 86,57 87,61 83,63','10,48 17,48 18,53 15,56 11,54'];
function v36RoadMask(){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="white"/>'+v36Occluders.map(p=>'<polygon points="'+p+'" fill="black"/>').join('')+'</svg>')+'")'}
const v36RenderBefore=easyRender;
easyRender=function(){if(s.ch===0&&easy.step===8&&v25Flaw().repaired)v28RepairState().open=false;v36RenderBefore();if(s.ch!==0)return;const scene=document.querySelector('.easy-scene');if(!scene)return;scene.classList.add('v36-refined');if(!courtView()){
 const road=scene.querySelector('.road-layer');if(road){road.style.maskImage=v36RoadMask();road.style.webkitMaskImage=v36RoadMask()}
 scene.querySelectorAll('.easy-place[data-easy-worker]').forEach(el=>{if(+el.dataset.easyWorker>=0)el.style.top=(parseFloat(el.style.top)-2.3)+'%'});
 scene.querySelectorAll('.house-work').forEach(el=>el.style.top=(parseFloat(el.style.top)-3)+'%');
 }
 const chest=scene.querySelector('.hands-satchel');if(chest){const goods=chest.querySelector('.craft-collect-goods');if(goods){goods.innerHTML=easy.collected.map(i=>'<span class="v36-collected-textile">'+silkPanel(i)+'</span>').join('');goods.setAttribute('aria-label','织物置于箱内、前壁之后')}chest.insertAdjacentHTML('beforeend',craftChest(0,'v36-chest-front'))}
 const sign=scene.querySelector('.architectural-plaque.merchant .clear-sign-svg');if(sign){sign.setAttribute('viewBox','0 0 400 80');sign.querySelector('text')?.setAttribute('font-size','61')}
 scene.querySelector('.v28-back-to-river')?.remove();
};
easyRender();
