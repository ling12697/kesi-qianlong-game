/* Approved previous preview, not the subsequently rejected redraw. */
const v28MapBefore=cleanMapFile;
cleanMapFile=function(season,court=false){return court?v28MapBefore(season,true):'gusu-approved-v28-'+['spring','summer','autumn','winter'][Math.max(0,Math.min(3,season))]+'.lite.webp'};
cleanViews[0].crop=[730,655,420,255];cleanViews[0].description='南窗 · 柳岸与运河';
cleanViews[1].crop=[1150,20,450,340];cleanViews[1].description='北窗 · 田畴、远山与塔影';
cleanViews[2].crop=[1300,515,360,230];cleanViews[2].description='南窗 · 城门与码头';
easyPos.splice(0,6,[20.6,35.8],[33.7,59],[59.2,47.2],[69,33.5],[84.3,46.2],[85,87]);
handsDoors.splice(0,3,[61.5,55.5],[68.4,40.5],[83.4,54.2]);
Object.assign(roadNodes,{g:[20.6,40.2],gbridge:[20.6,43.7],g1:[20.6,47.5],g2:[24,61],shop:[33,67.8],j1:[44,68.5],j2:[54.5,68.2],c:[62.5,66.4],south1:[63.4,61.5],south2:[63,57.5],south:[61.5,55.5],junction:[68,67],n1:[65.4,61],n2:[68.3,53.5],n3:[68.7,44.4],north:[68.4,40.5],e1:[77,68.7],eastCurve:[80.4,66.2],e2:[81.3,61.4],eastGate:[83.4,55.8],east:[83.4,54.2],d1:[75,73.5],d2:[73.7,81.5],dock:[73.7,86.1]});
roadLinks.splice(0,roadLinks.length,...[['g','gbridge'],['gbridge','g1'],['g1','g2'],['g2','shop'],['shop','j1'],['j1','j2'],['j2','c'],['c','south1'],['south1','south2'],['south2','south'],['c','junction'],['junction','n1'],['n1','n2'],['n2','n3'],['n3','north'],['junction','e1'],['e1','eastCurve'],['eastCurve','e2'],['e2','eastGate'],['eastGate','east'],['e1','d1'],['d1','d2'],['d2','dock']]);
if(!roadState.job&&!roadState.segments.length)roadState.point=[...roadNodes[roadState.node]];
canalBoatRoute.splice(0,canalBoatRoute.length,[49,96.8],[55,96.6],[61,96.8]);
canalSafeWater.splice(0,canalSafeWater.length,[43,93],[67,93],[67,99.5],[43,99.5]);
function v28RepairState(){let r=easy.repair28??={open:false,threads:0};r.threads=Math.max(0,Math.min(3,r.threads||0));if(v25Flaw().repaired)r.threads=3;return r}
function v28OpenRepair(){if(easy.step!==8||easy.capital)return;v28RepairState().open=true;easySave();easyRender()}
function v28CloseRepair(){v28RepairState().open=false;easySave();easyRender()}
const v28WeftBefore=v26WeftMarkup;
v26WeftMarkup=function(i){let html=v28WeftBefore(i),n=easy.step===8?v28RepairState().threads:0;if(!n)return html;let paths=0;return html.replace(/<path\b[^>]*\/>/g,p=>paths++<n*3?'':p)};
const v28RepairComplete=v25Repair;let v28RepairBusy=false;
v25Repair=function(){let f=v25Flaw(),r=v28RepairState();if(easy.step!==8||easy.capital||f.repaired||!r.open||v28RepairBusy)return;v28RepairBusy=true;setTimeout(()=>v28RepairBusy=false,280);r.threads=Math.min(3,r.threads+1);if(r.threads===3){v28RepairComplete();return}hands().actions++;handsTone('silk');easySave();easyRender();document.querySelector('.v28-repair-closeup')?.classList.add('v28-thread-settle');handsFlash('第'+r.threads+'根松纬已收紧',[55,62])};
const v28CloseupBefore=v25VoyageMarkup;
v25VoyageMarkup=function(){let f=v25Flaw(),r=v28RepairState();if(r.open){let html=v28CloseupBefore();html=html.replace('v26-repair-scene','v26-repair-scene v28-repair-closeup').replace('修整鹤补留签处','修整鹤补留签处 · '+r.threads+'/3').replace('拖至右侧松纬处','拖拽收紧下一根松纬');return html.replace('</section>','<button class="v28-back-to-river" onclick="v28CloseRepair()">收起织面 · 回看河景</button></section>')}return `<section class="v28-seated-voyage" aria-label="我坐在差船上，望向船外运河"><div class="v28-river-view" role="img" aria-label="原先的船上第一视角：舱架、左手、货包与船外河街"></div><div class="v28-river-ripples" aria-hidden="true"></div><header class="v28-voyage-heading"><small>随船北上 · 水运二十余日</small><h2>${f.repaired?'留签已修整，继续北上':'我带着差货，沿运河北上'}</h2></header><aside class="v28-ship-note"><small>随船记</small><p>${f.repaired?'鹤补三根松纬已收紧，织面与封签已复核。':'收验时留签的鹤补仍有松纬，趁行船时展开修整。'}</p></aside><button class="v28-open-cloth v22-next" onclick="v28OpenRepair()">${f.repaired?'展开鹤补，查看修整结果':'展开留签鹤补 · 近看修整'} →</button>${f.repaired?'<button class="v28-capital primary v22-next" onclick="easy.capital=true;easyRender()">抵京交割 · 查看回执 →</button>':''}</section>`};
const v28RenderBefore=easyRender;
easyRender=function(){v28RenderBefore();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;scene.classList.add('v28-approved-world');scene.querySelector('.court-village')?.remove();if(easy.step===8&&!easy.capital){scene.classList.add('v28-voyage-mode');scene.classList.toggle('v28-repair-open',v28RepairState().open)}easySave()};
easyRender();
