/* Scene-local replay checkpoints, independent of the three chapter save keys. */
(()=>{
 const copy=v=>JSON.parse(JSON.stringify(v)),storageKey=(globalThis.KESI_STORAGE_PREFIX||'')+'kesi-scene-replay-v47';
 let checkpoints={};try{checkpoints=JSON.parse(localStorage.getItem(storageKey))||{}}catch{}
 let restoring=false;
 const persist=()=>{try{const keys=Object.keys(checkpoints);keys.slice(0,Math.max(0,keys.length-72)).forEach(k=>delete checkpoints[k]);localStorage.setItem(storageKey,JSON.stringify(checkpoints))}catch{}};
 function context(){
  if(s.ch===0&&typeof easy!=='undefined'){
   const p=typeof boss==='function'?boss():{},pane=typeof handsPane==='undefined'?null:handsPane,detail=typeof detailView==='undefined'?null:detailView;
   let frame=easy.step===0?p.westStage||'plan':easy.step===8?(easy.capital?'receipt':easy.repair28?.open?'repair':'river'):easy.step===7&&easy.place===5?'loading':easy.step===6?(detail?.kind==='inspect'?'inspect-'+detail.index:easy.submitted?'inspection':easy.courtReturn?'court':'return'):p.view||'map';
   if(pane)frame+=':'+pane.kind+':'+(pane.index??'');else if(detail?.kind==='weave')frame+=':weave-'+detail.index;
   const ui={pane:copy(pane),target:typeof handsTarget==='undefined'?null:handsTarget,detail:copy(detail),unfold:typeof detailUnfold==='undefined'?0:detailUnfold,house:typeof v40House==='undefined'?null:v40House};
   return {ch:0,key:'0:'+easy.step+':'+frame,model:copy(easy),ui};
  }
  if(s.ch===1&&typeof ex!=='undefined')return {ch:1,key:'1:'+ex.scene+(ex.pane==='delivery'?':delivery':''),model:copy(ex),ui:null};
  if(s.ch===2&&typeof m3!=='undefined')return {ch:2,key:'2:'+m3.scene,model:copy(m3),ui:null};
  return null;
 }
 function baseline(ctx){const c=copy(ctx),m=c.model;
  if(c.ch===0){
   if(c.ui.pane?.kind==='material'){const i=c.ui.pane.index;m.hands.materials[i]=[];if(m.hands.craft){m.hands.craft.boxes[i]=true;delete m.hands.craft.autoClosing}}
   if(m.step===7&&m.place===5&&m.hands)m.hands.loaded=[];
   if(m.step===8&&!m.capital){m.flaw25={index:1,found:true,marked:true,repaired:false};m.voyageChecked=false;m.fixed=false;m.repair28={open:!!m.repair28?.open,threads:0}}
   if(c.ui.detail?.kind==='inspect'){const i=c.ui.detail.index;m.checked=(m.checked||[]).filter(n=>n!==i);c.ui.unfold=0;if(i===1){m.flaw25={index:1,found:false,marked:false,repaired:false};if(m.living){m.living.repair=m.living.repair.filter(n=>n!==i);m.living.atSea=m.living.atSea.filter(n=>n!==i)}}}
  }else if(c.ch===1){const f=exportFresh();m.selected=null;m.menu=false;
   if(m.pane==='delivery'){m.jobs.forEach(j=>j.packed=false);m.shipped=false}
   else if(m.scene==='office'){m.brief=[];m.accepted=false;m.pane=null}
   else if(m.scene==='trial'){m.trial=f.trial;m.foil=Math.max(4,m.foil);m.pane=null}
   else if(m.scene==='design')m.design=f.design;
   else if(m.scene==='factory'){m.jobs=f.jobs;m.event=f.event}
   else if(m.scene==='inspect'){m.jobs.forEach(j=>{j.weighed=false;j.onTable=false;j.unroll=0;j.found=false;j.remedied=false;j.grade=null;j.waived=false;j.packed=false})}
   if(m.scene!=='end')m.shipped=false;
  }else{const f=m3Fresh();m.selected=null;m.menu=false;m.pane=null;
   if(m.scene==='studio')m.learner=false;
   if(m.scene==='repair'){m.brief=[];m.repair=f.repair}
   if(m.scene==='design')m.design=f.design;
   if(m.scene==='store'){m.store=f.store;m.design.stock=Math.max(1,m.design.stock+(ctx.model.store.served?1:0))}
   if(m.scene==='museum')m.gallery=f.gallery;
   if(m.scene==='media')m.media=f.media;
   if(m.scene!=='end')m.finished=false;
  }
  c.time=Date.now();return c;
 }
 function capture(){if(restoring)return;const c=context();if(c&&!checkpoints[c.key]){checkpoints[c.key]=baseline(c);persist()}}
 function shiftTimers(v,delta){if(!v||typeof v!=='object')return;for(const k of Object.keys(v)){if((k==='until'||k==='started'||k==='playUntil')&&typeof v[k]==='number'&&v[k]>0)v[k]+=delta;else if(v[k]&&typeof v[k]==='object')shiftTimers(v[k],delta)}}
 function reset(){const now=context();if(!now)return;capture();const c=copy(checkpoints[now.key]);if(!c)return;restoring=true;
  try{
   shiftTimers(c.model,Date.now()-(c.time||Date.now()));
   if(c.ch===0){if(typeof westStop==='function')westStop();if(typeof craftStop==='function')craftStop();if(typeof roadClear==='function')roadClear();if(typeof v24LidTimer!=='undefined')clearTimeout(v24LidTimer);easy=c.model;
    if(typeof handsPane!=='undefined')handsPane=c.ui.pane;if(typeof handsTarget!=='undefined')handsTarget=c.ui.target;if(typeof detailView!=='undefined')detailView=c.ui.detail;if(typeof detailUnfold!=='undefined')detailUnfold=c.ui.unfold;if(typeof v40House!=='undefined')v40House=c.ui.house;if(typeof livingBusy!=='undefined')livingBusy=false;if(typeof livingReceipt!=='undefined')livingReceipt=null;if(typeof workshopLast!=='undefined')workshopLast=Date.now();if(typeof handsPointer!=='undefined'){handsPointer?.ghost?.remove();handsPointer=null}if(typeof easyPointer!=='undefined')easyPointer=null;if(typeof easyGhost!=='undefined'){easyGhost?.remove();easyGhost=null}if(typeof westPointer!=='undefined'){westPointer?.ghost?.remove();westPointer=null}if(typeof bossDrag!=='undefined'){bossDrag?.ghost?.remove();bossDrag=null}easySave();easyRender();
   }else if(c.ch===1){const b=c.model,key=c.key;if(key.endsWith(':delivery')){ex.jobs.forEach((j,i)=>j.packed=b.jobs[i].packed);ex.shipped=false;ex.pane='delivery'}
    else if(b.scene==='office'){ex.brief=b.brief;ex.accepted=b.accepted;ex.shipped=false}
    else if(b.scene==='trial'){ex.trial=b.trial;ex.foil=b.foil;ex.shipped=false}
    else if(b.scene==='design'){ex.design=b.design;ex.shipped=false}
    else if(b.scene==='factory'){ex.jobs=b.jobs;ex.event=b.event;ex.shipped=false}
    else if(b.scene==='inspect'){ex.jobs.forEach((j,i)=>{for(const k of ['weighed','onTable','unroll','found','remedied','grade','waived','packed'])j[k]=b.jobs[i][k]});ex.shipped=false}
    ex.selected=null;ex.menu=false;ex.lastTick=Date.now();if(!key.endsWith(':delivery'))ex.pane=null;if(typeof ex48ExpandFrame!=='undefined'&&ex48ExpandFrame!==null){cancelAnimationFrame(ex48ExpandFrame);ex48ExpandFrame=null}if(typeof ex46UnrollDrag!=='undefined')ex46UnrollDrag=null;if(typeof exDrag!=='undefined'){exDrag?.ghost?.remove();exDrag=null}exportSave();exportRender();
   }else{const b=c.model;
    if(b.scene==='studio')m3.learner=b.learner;
    if(b.scene==='repair'){m3.brief=b.brief;m3.repair=b.repair}
    if(b.scene==='design')m3.design=b.design;
    if(b.scene==='store'){m3.store=b.store;m3.design.stock=b.design.stock}
    if(b.scene==='museum')m3.gallery=b.gallery;
    if(b.scene==='media')m3.media=b.media;
    if(b.scene!=='end')m3.finished=false;m3.pane=null;m3.selected=null;m3.menu=false;if(typeof m3Drag!=='undefined'){m3Drag?.ghost?.remove();m3Drag=null}m3Save();m3Render();
   }
  }finally{restoring=false}
 }
 function attach(){const tool=s.ch===0?document.querySelector('.easy-scene .easy-menu'):s.ch===1?document.querySelector('.ex-world .ex-tools'):document.querySelector('.m3-world .m3-tools');if(!tool)return;tool.classList.add('scene-replay-toolbar');if(!tool.querySelector('.scene-replay-button'))tool.insertAdjacentHTML('afterbegin','<button class="scene-replay-button" onclick="SceneReplay47.reset()" title="重新开始当前画面的操作，不重置整关" aria-label="重玩本幕">重玩本幕</button>')}
 function refreshQingGuide(name){if(name!=='easyRender'||s.ch!==0||typeof v22Cues!=='function')return;const scene=document.querySelector('.easy-scene');if(scene)v22Cues(scene)}
 function wrap(name){const previous=globalThis[name];if(typeof previous!=='function')return;globalThis[name]=function(...args){const result=previous.apply(this,args);capture();attach();refreshQingGuide(name);return result}}
 globalThis.SceneReplay47={context,baseline,capture,reset,clearChapter(ch){for(const k of Object.keys(checkpoints))if(k.startsWith(ch+':'))delete checkpoints[k];persist()}};
 wrap('easyRender');wrap('exportRender');wrap('m3Render');
 if(typeof easyReset==='function'){const prev=easyReset;easyReset=function(){SceneReplay47.clearChapter(0);return prev()}}
 const style=document.createElement('style');style.textContent='.scene-replay-toolbar{z-index:160!important}.scene-replay-button{animation:none!important;white-space:nowrap;letter-spacing:.02em!important}.easy-menu .scene-replay-button{font-size:12px}.ex-tools .scene-replay-button,.m3-tools .scene-replay-button{font-size:inherit}';document.head.append(style);
 capture();attach();refreshQingGuide('easyRender');
})();
