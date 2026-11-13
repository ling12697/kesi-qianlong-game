/* First-act palette and medium remain the visual reference for every scene. */
const v27MapBefore=cleanMapFile;
cleanMapFile=function(season,court=false){return court?v27MapBefore(season,true):'gusu-court-v27-'+['spring','summer','autumn','winter'][Math.max(0,Math.min(3,season))]+'.lite.webp'};
warmSeasonImages=function(season){for(let n of [season,Math.min(3,season+1)])for(let court of [false,true]){let url=cleanMapFile(n,court);if(seasonalPreloads.has(url))continue;seasonalPreloads.add(url);let picture=new Image();picture.src=url}};
const v27RenderBefore=easyRender;
easyRender=function(){v27RenderBefore();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;scene.classList.add('v27-court-palette');let sign=scene.querySelector('.craft-street-sign');if(sign)sign.remove();let ship=scene.querySelector('.v22-ship-flag');if(ship){ship.classList.add('v27-ship-frame');ship.classList.remove('v25-quay-cue','v26-soft-cue');ship.classList.toggle('v27-ship-ready',easy.step===7&&easy.place!==5);const ready=easy.step===7&&easy.place!==5;ship.innerHTML='<span class="v27-ship-caption">差船</span>'+(ready?'<span class="report-pointer"><i class="easy-pointer" aria-hidden="true">▼</i>点此装船</span>':'');ship.setAttribute('aria-label',ready?'差船 · 点此装船':'差船 · 先完成收验');}easySave()};
easyRender();
