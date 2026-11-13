/* Four approved originals; windows and delivery coordinates share this map. */
const v35CourtMap=cleanMapFile;
cleanMapFile=function(season,court=false){return court?v35CourtMap(season,true):'gusu-confirmed-v35-'+['spring','summer','autumn','winter'][Math.max(0,Math.min(3,season))]+'.lite.webp'};
cleanViews[0].crop=[530,700,470,220];cleanViews[0].description='南窗 · 柳岸与运河';
cleanViews[1].crop=[1290,110,375,300];cleanViews[1].description='北窗 · 田畴、远山与塔影';
cleanViews[2].crop=[1310,540,355,300];cleanViews[2].description='南窗 · 城门与码头';
easyPos.splice(0,6,[23.3,39.6],[32.5,65],[56.8,66],[62.9,49],[74.4,35.8],[83,87.8]);
const v35Chains=[
 ['g',[23.2,48],[23.2,52],[20.2,55.3],[19,58.5],[18.4,62.5],[19.5,67],[21.8,71.5],[26.5,75.4],'shop'],
 ['shop',[40,77.2],[47,78.1],[53,78.2],'hub'],
 ['hub',[56.4,76.9],'south'],
 ['hub',[64,77.5],[68.2,75.7],[70.4,73],[70.1,69.5],[68.4,66],'bend'],
 ['bend',[70.6,62.5],[72.9,61],'north'],
 ['bend',[72.7,66],[77,64],[79.8,61.2],[83.8,58.8],[86,56],[86.5,52.2],[85.4,48.1],[82.8,44.7],[80,42.7],'east'],
 ['hub',[64,77.5],[69,78],[73,78.5],[75,79.8],'dock']
];
for(const k of Object.keys(roadNodes))delete roadNodes[k];
Object.assign(roadNodes,{g:[23.2,43.8],shop:[32.5,76.8],hub:[58.5,78],south:[56.8,75.4],bend:[69.5,65.3],north:[73.2,60],east:[74.6,41.7],dock:[77.8,81.4]});
roadLinks.splice(0);v35Chains.forEach((chain,c)=>{let prev;chain.forEach((p,i)=>{let key=typeof p==='string'?p:`v35_${c}_${i}`;if(Array.isArray(p))roadNodes[key]=p;if(prev)roadLinks.push([prev,key]);prev=key})});
handsDoors.splice(0,3,roadNodes.south,roadNodes.north,roadNodes.east);roadClear();
canalBoatRoute.splice(0,canalBoatRoute.length,[45,94.4],[52,94.4],[61,94.4]);
canalSafeWater.splice(0,canalSafeWater.length,[37,88],[68,88],[68,99],[37,99]);
/* One needle action, including compatibility with partially repaired old saves. */
v25Repair=function(){const f=v25Flaw(),r=v28RepairState();if(easy.step!==8||easy.capital||f.repaired||!r.open)return;r.threads=3;f.repaired=true;f.marked=true;f.found=true;easy.voyageOpened=true;easy.voyageChecked=true;easy.fixed=true;hands().actions++;const m=livingMeta();if(!m.atSea.includes(f.index))m.atSea.push(f.index);bossRecord('repair-at-sea','我用绣花针将留签处的松纬一次理顺，复核织面与封签。');handsTone('silk');easySave();easyRender();document.querySelector('.v28-repair-closeup')?.classList.add('v28-thread-settle');handsFlash('松纬已理顺 · 织面已复核',[55,64])};
const v35VoyageBefore=v25VoyageMarkup;
v25VoyageMarkup=function(){let html=v35VoyageBefore();if(!v28RepairState().open)return html.replace('鹤补三根松纬已收紧，织面与封签已复核。','鹤补留签处已用绣花针理顺，织面与封签已复核。');return html.replace(/<button class="v26-beater[\s\S]*?<\/button>/,`<button class="v26-beater v35-needle v22-next" data-v25-repair onclick="v25Repair()" aria-label="用绣花针一次理顺留签松纬">${v29NeedleMarkup()}<span>拖针至松纬处 · 修整一次</span></button>`).replace(/修整鹤补留签处 · \d\/3/,'修整鹤补留签处').replace(/用绣花针理顺松纬，再用小拨子逐根收紧，最后复核。/,'将绣花针拖到留签处，一次理顺松纬并复核。')};
/* Exact projective placement on the four cloth-support corners, responsive to the scene. */
function v35ProjectCloth(){
 const el=document.querySelector('.v35-approved .v26-repair-fabric');if(!el)return;
 const box=el.parentElement.getBoundingClientRect(),pts=[[.412,.438],[.610,.438],[.648,.731],[.382,.731]].map(([x,y])=>[x*box.width,y*box.height]);
 const src=[[0,0],[200,0],[200,200],[0,200]],a=[];
 src.forEach(([x,y],i)=>{const [u,v]=pts[i];a.push([x,y,1,0,0,0,-u*x,-u*y,u],[0,0,0,x,y,1,-v*x,-v*y,v])});
 for(let c=0;c<8;c++){let pivot=c;for(let j=c+1;j<8;j++)if(Math.abs(a[j][c])>Math.abs(a[pivot][c]))pivot=j;[a[c],a[pivot]]=[a[pivot],a[c]];let z=a[c][c];for(let k=c;k<9;k++)a[c][k]/=z;for(let j=0;j<8;j++)if(j!==c){let z=a[j][c];for(let k=c;k<9;k++)a[j][k]-=z*a[c][k]}}
 const h=a.map(row=>row[8]);el.style.transform=`matrix3d(${h[0]},${h[3]},0,${h[6]},${h[1]},${h[4]},0,${h[7]},0,0,1,0,${h[2]},${h[5]},0,1)`;
}
window.addEventListener('resize',v35ProjectCloth);
const v35RenderBefore=easyRender;
easyRender=function(){v35RenderBefore();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;scene.classList.add('v35-approved');if(!courtView()){scene.style.backgroundImage=`url("${cleanMapFile(easy.seasonStage||0)}")`;scene.querySelector('.v29-map-plate')?.style.setProperty('background-image',`url("${cleanMapFile(easy.seasonStage||0)}")`);let road=scene.querySelector('.road-layer');if(road){road.style.maskImage='none';road.style.webkitMaskImage='none'}}v35ProjectCloth();};
easyRender();
