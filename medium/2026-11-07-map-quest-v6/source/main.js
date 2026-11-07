(()=>{
  const $=id=>document.getElementById(id),KEY='kesi-medium-v6-first-level';
  const stage=$('stage'),room=$('room'),mapScene=$('mapScene'),templeScene=$('templeScene');
  const safeRead=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return{}}};
  let data={phase:'ROOM_READY',mapSeen:[],templeSeen:[],stored:[],...safeRead()};
  const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(data))}catch{}};
  const roomFlow=window.createRoomFlow({stage,room,mapScene,templeScene,toastEl:$('roomToast'),dialogueEl:$('dialogueText')});
  const markers=[...document.querySelectorAll('.map-marker')];
  const mapPan=window.createPanZoom({windowEl:$('mapWindow'),contentEl:$('mapZoomLayer'),onZoom:s=>{$('mapGesture').textContent=s===1?'拖动浏览 · 滚轮或双指缩放':`缩放 ${Math.round(s*100)}% · 拖动浏览`}});
  const temple=window.createTempleObserver({windowEl:$('templeWindow'),layer:$('templeZoomLayer'),hotspots:[...document.querySelectorAll('.temple-hotspot')],progress:$('templeProgress'),caption:$('templeCaption'),fact:$('templeFact'),closeButton:$('closeTemple'),onComplete:()=>{data.templeSeen=[...new Set(data.templeSeen)];save()}});
  const archive=window.createArchiveInteraction({stage,archive:$('archiveObject'),documents:[$('dossierMap'),$('dossierTemple')],onStored:(key)=>{data.stored=[...new Set([...data.stored,key])];save()},onComplete:()=>{data.phase='ARCHIVE_COMPLETE';save();$('artScrollProp').hidden=false;roomFlow.say('资料已经整理好。请查看太监呈上的佛像画样。')},toast:roomFlow.toast});
  const transition=window.createArtworkTransition({stage,room,reveal:$('artReveal'),prop:$('artScrollProp'),mask:$('revealMask'),roller:$('revealRoller'),copy:$('revealCopy'),instruction:$('revealInstruction'),placeholder:$('chapterPlaceholder'),onEnter:()=>{data.phase='NEXT_CHAPTER';save();transition.showPlaceholder()}});
  let hintTimer;

  function showFact(key){const entry=window.GAME_HISTORY[key];if(!entry)return;const already=data.mapSeen.includes(key);if(!already){data.mapSeen.push(key);markers.find(m=>m.dataset.marker===key)?.classList.add('visited');const ring=document.querySelector(`[data-ring="${key}"]`);ring?.classList.add('active');$('mapProgress').textContent=`${data.mapSeen.length} / 2 已查看`;if(data.mapSeen.length===2)$('closeMap').disabled=false;save()}
    $('mapFactTag').textContent=entry.tag;$('mapFactLine').textContent=entry.line;$('mapFactMore').textContent=entry.more;$('mapFactSource').textContent=entry.kind+' · '+entry.source;
    const holder=$('mapFactSource');holder.replaceChildren(document.createTextNode(entry.kind+' · '));entry.sources.forEach((s,i)=>{if(i)holder.append(document.createTextNode(' / '));const a=document.createElement('a');a.href=s.href;a.target='_blank';a.rel='noreferrer';a.textContent=s.label;a.style.color='#e2c47f';holder.append(a)});
    $('mapFact').hidden=false;$('mapHint').classList.add('is-hidden');roomFlow.toast(already?'再次查看这条历史线索':'已记录一处历史线索');
  }
  markers.forEach(marker=>{const activate=e=>{e.stopPropagation();showFact(marker.dataset.marker)};marker.addEventListener('click',activate);marker.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate(e)}})});
  $('mapPlus').addEventListener('click',()=>mapPan.zoom(mapPan.getScale()*1.2));$('mapMinus').addEventListener('click',()=>mapPan.zoom(mapPan.getScale()*.84));$('mapReset').addEventListener('click',()=>mapPan.reset());
  $('closeMapFact').addEventListener('click',()=>$('mapFact').hidden=true);
  $('mapScroll').addEventListener('click',async()=>{if(data.phase!=='ROOM_READY')return;data.phase='MAP_OPEN';save();$('idleHint').classList.add('is-gone');roomFlow.say('舆图已经铺开，点亮两处标记看看不同年代的资料。');await roomFlow.openExplorer('map');$('mapProgress').textContent=`${data.mapSeen.length} / 2 已查看`;if(data.mapSeen.length===2)$('closeMap').disabled=false});
  $('closeMap').addEventListener('click',async()=>{if(data.mapSeen.length<2||roomFlow.isBusy())return;data.phase='MAP_CLOSING';save();$('mapFact').hidden=true;await roomFlow.closeExplorer('map');data.phase='TEMPLE_READY';save();$('mapScroll').hidden=true;$('templeScroll').hidden=false;roomFlow.say('再看一份承德普宁寺的建筑资料。');});
  $('templeScroll').addEventListener('click',async()=>{if(data.phase!=='TEMPLE_READY')return;data.phase='TEMPLE_OPEN';save();roomFlow.say('拖动照片观察建筑，点亮两处研究线索。');await roomFlow.openExplorer('temple');});
  $('closeTemple').addEventListener('click',async()=>{if(temple.getSeen()<2||roomFlow.isBusy())return;data.phase='TEMPLE_CLOSING';save();$('templeFact').hidden=true;await roomFlow.closeExplorer('temple');data.phase='ARCHIVE_READY';save();$('templeScroll').hidden=true;$('archiveObject').hidden=false;$('dossierMap').hidden=false;$('dossierTemple').hidden=false;roomFlow.say('把已经查阅的两份资料放进卷宗。可以拖动，也可以点选后再点卷宗。');});
  $('dismissHint').addEventListener('click',()=>$('idleHint').classList.add('is-gone'));
  $('restart').addEventListener('click',resetAll);$('placeholderRestart').addEventListener('click',resetAll);
  $('revealBack').addEventListener('click',()=>{data.phase='ARCHIVE_COMPLETE';save()});

  function resetAll(){clearTimeout(hintTimer);try{localStorage.removeItem(KEY)}catch{}data={phase:'ROOM_READY',mapSeen:[],templeSeen:[],stored:[]};roomFlow.reset();mapPan.reset();temple.reset();archive.reset();transition.reset();markers.forEach(m=>m.classList.remove('visited'));document.querySelectorAll('.local-ring').forEach(r=>r.classList.remove('active'));$('mapProgress').textContent='0 / 2 已查看';$('closeMap').disabled=true;$('mapFact').hidden=true;$('mapHint').classList.remove('is-hidden');$('idleHint').classList.remove('is-gone');$('mapScroll').hidden=false;$('templeScroll').hidden=true;$('artScrollProp').hidden=true;$('dialogueText').textContent='先打开这份舆图，看看相关的历史线索。';$('templeProgress').textContent='0 / 2 已观察';}

  function restore(){
    markers.forEach(m=>{if(data.mapSeen.includes(m.dataset.marker)){m.classList.add('visited');document.querySelector(`[data-ring="${m.dataset.marker}"]`)?.classList.add('active')}});$('mapProgress').textContent=`${data.mapSeen.length} / 2 已查看`;$('closeMap').disabled=data.mapSeen.length<2;
    if(data.phase==='MAP_CLOSING')data.phase='TEMPLE_READY';if(data.phase==='TEMPLE_CLOSING')data.phase='ARCHIVE_READY';if(data.phase==='ARTWORK_REVEAL')data.phase='ARCHIVE_COMPLETE';
    if(data.phase==='MAP_OPEN'){stage.classList.add('is-pushed');mapScene.hidden=false;mapScene.classList.add('is-open');$('idleHint').classList.add('is-gone')}
    if(['TEMPLE_READY','TEMPLE_OPEN','ARCHIVE_READY','ARCHIVE_COMPLETE'].includes(data.phase)){$('mapScroll').hidden=true;$('templeScroll').hidden=data.phase!=='TEMPLE_READY';$('idleHint').classList.add('is-gone')}
    if(data.phase==='TEMPLE_OPEN'){stage.classList.add('is-pushed');templeScene.hidden=false;templeScene.classList.add('is-open');temple.restore(data.templeSeen);$('closeTemple').disabled=data.templeSeen.length<2}
    if(data.phase==='ARCHIVE_READY'||data.phase==='ARCHIVE_COMPLETE'){temple.restore(data.templeSeen);$('templeScroll').hidden=true;$('archiveObject').hidden=false;$('dossierMap').hidden=false;$('dossierTemple').hidden=false;archive.restore(data.stored);}
    if(data.phase==='ARCHIVE_COMPLETE'){$('artScrollProp').hidden=false;roomFlow.say('资料已经整理好。请查看太监呈上的佛像画样。')}
    if(data.phase==='NEXT_CHAPTER'){transition.showPlaceholder()}
    save();
  }
  restore();
  hintTimer=setTimeout(()=>{if(data.phase==='ROOM_READY')$('idleHint').classList.add('hint-attention')},9000);
  window.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('mapFact').hidden)$('mapFact').hidden=true;if(!$('templeFact').hidden)$('templeFact').hidden=true}});
})();
