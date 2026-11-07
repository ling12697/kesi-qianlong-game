window.createArchiveInteraction=function({stage,archive,documents,onStored,onComplete,toast}){
  const validKeys=new Set(['map','temple']),stored=new Set(),timers=new Set();
  let selected=null,active=null,suppressClickTarget=null,suppressClickUntil=0,completed=false;
  const bounds=el=>el.getBoundingClientRect();
  const later=(fn,ms)=>{const id=setTimeout(()=>{timers.delete(id);fn()},ms);timers.add(id);return id};

  function store(doc,{animate=true,announce=true}={}){
    const key=doc?.dataset?.doc;
    if(!validKeys.has(key)){toast('资料标识错误，无法归档');return false}
    if(stored.has(key))return false;
    const docRect=bounds(doc),folderRect=bounds(archive);
    const dx=folderRect.left+folderRect.width/2-(docRect.left+docRect.width/2);
    const dy=folderRect.top+folderRect.height/2-(docRect.top+docRect.height/2);
    doc.style.setProperty('--store-x',`${dx}px`);doc.style.setProperty('--store-y',`${dy}px`);
    stored.add(key);selected=null;doc.classList.remove('is-selected','is-dragging');doc.classList.add('is-stored');doc.setAttribute('aria-pressed','true');
    archive.classList.add(stored.size===1?'has-one':'pulse','accepting');
    later(()=>archive.classList.remove('accepting','pulse'),650);
    if(animate)later(()=>{doc.hidden=true},600);else doc.hidden=true;
    onStored?.(key,[...stored]);
    if(announce)toast(key==='map'?'舆图记录已收入卷宗':'寺庙图样记录已收入卷宗');
    if(stored.size===documents.length&&!completed){completed=true;archive.classList.add('is-complete');if(animate)later(()=>onComplete?.([...stored]),700);else onComplete?.([...stored]);}
    return true;
  }
  function nearArchive(doc){const a=bounds(archive),d=bounds(doc);return !(d.right<a.left-20||d.left>a.right+20||d.bottom<a.top-25||d.top>a.bottom+25)}
  function start(e,doc){if(doc.hidden||stored.has(doc.dataset.doc))return;if(selected){selected.classList.remove('is-selected');selected=null}active={doc,id:e.pointerId,x:e.clientX,y:e.clientY,moved:false};doc.setPointerCapture?.(e.pointerId);doc.classList.remove('is-selected');doc.classList.add('is-dragging');doc.style.zIndex='25';stage.classList.add('drag-active')}
  function move(e){if(!active||active.id!==e.pointerId)return;const dx=e.clientX-active.x,dy=e.clientY-active.y;if(Math.hypot(dx,dy)>5)active.moved=true;if(active.moved){active.doc.style.transform=`translate3d(${dx}px,${dy}px,0) scale(1.06) rotate(0deg)`;archive.classList.toggle('accepting',nearArchive(active.doc));e.preventDefault()}}
  function end(e){if(!active||active.id!==e.pointerId)return;const doc=active.doc,wasDragged=active.moved,drop=wasDragged&&nearArchive(doc);doc.classList.remove('is-dragging');doc.style.zIndex='';doc.style.transform='';archive.classList.remove('accepting');stage.classList.remove('drag-active');active=null;if(wasDragged){suppressClickTarget=doc;suppressClickUntil=Date.now()+240;later(()=>{if(suppressClickTarget===doc)suppressClickTarget=null},250);if(drop)store(doc);else toast('把资料移到中央卷宗')} }
  documents.forEach(doc=>{
    doc.addEventListener('pointerdown',e=>start(e,doc));doc.addEventListener('pointermove',move,{passive:false});doc.addEventListener('pointerup',end);doc.addEventListener('pointercancel',end);
    doc.addEventListener('click',e=>{e.preventDefault();if((Date.now()<suppressClickUntil&&suppressClickTarget===doc)||stored.has(doc.dataset.doc)){if(suppressClickTarget===doc)suppressClickTarget=null;return}if(selected&&selected!==doc)selected.classList.remove('is-selected');selected=doc;doc.classList.add('is-selected');archive.classList.add('accepting');toast('资料已选中，再点中央卷宗收入')});
    doc.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();doc.click()}});
  });
  archive.addEventListener('click',()=>{if(selected){store(selected);return}if(stored.size<documents.length)toast('点选一份资料，再点卷宗；也可直接拖入')});
  archive.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();archive.click()}});
  return{
    reset(){timers.forEach(clearTimeout);timers.clear();stored.clear();selected=null;active=null;suppressClickTarget=null;suppressClickUntil=0;completed=false;archive.className='archive-object';archive.hidden=true;documents.forEach(d=>{d.hidden=true;d.className=`dossier-card dossier-${d.dataset.doc}`;d.style.transform='';d.style.zIndex='';d.style.removeProperty('--store-x');d.style.removeProperty('--store-y');d.removeAttribute('aria-pressed')})},
    restore(keys){archive.hidden=false;documents.forEach(d=>{const shouldStore=(keys||[]).includes(d.dataset.doc);if(shouldStore){d.hidden=false;store(d,{animate:false,announce:false})}else d.hidden=false})},
    getStored:()=>stored.size
  };
};
