const v30MapBefore=cleanMapFile;
cleanMapFile=function(season,court=false){return court?v30MapBefore(season,true):'gusu-clear-v29-'+['spring','summer','autumn','winter'][Math.max(0,Math.min(3,season))]+'.lite.webp'};
/* Keep painted roads, feet, door thresholds and foreground architecture in one coordinate system. */
// The boat's complete hull and pole remain in open water, below the painted traffic.
canalBoatRoute.splice(0,canalBoatRoute.length,[36.5,94],[45.5,94.5],[55.5,94.2]);
canalSafeWater.splice(0,canalSafeWater.length,[29,87],[63,87],[63,99.8],[29,99.8]);
const v30VoyageBefore=v25VoyageMarkup;
v25VoyageMarkup=function(){let html=v30VoyageBefore();if(!v28RepairState().open)return html;let n=v28RepairState().threads;html=html.replace(/<button class="v26-beater"[\s\S]*?<\/button>/,`<button class="v26-beater v30-repair-tools" data-v25-repair onclick="v25Repair()" aria-label="${n===0?'用绣花针理顺松纬，再用小拨子收紧':'用小拨子收紧松纬'}"><img src="repair-tools-v29.lite.webp" alt="小拨子与穿丝绣花针" draggable="false"><span>${n===0?'绣花针理纬 · 小拨子收紧':'小拨子收紧第'+(n+1)+'根松纬'}</span></button>`).replace(/把拨子移到松纬处，收紧后复核。|将绣花针移到松纬处，理顺后复核。/,'用绣花针理顺松纬，再用小拨子逐根收紧，最后复核。');return html;};
const v30RecordBefore=bossRecord;bossRecord=function(key,words){return v30RecordBefore(key,key==='repair-at-sea'?words.replace(/用拨子收紧|用绣花针理顺并收紧/,'用绣花针理顺、再用小拨子收紧'):words)};
const v30RenderBefore=easyRender;
easyRender=function(){v30RenderBefore();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;scene.classList.add('v30-scene');let map=cleanMapFile(Math.max(0,Math.min(3,easy.seasonStage||0)));scene.style.setProperty('--v30-map',`url("${map}")`);let boat=scene.querySelector('.canal-boat img');if(boat)boat.src='canal-boat-v29.lite.webp';roadPaint();};
easyRender();
