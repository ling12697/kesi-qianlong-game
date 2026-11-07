(()=>{
  const q=(s,root=document)=>root.querySelector(s), qa=(s,root=document)=>[...root.querySelectorAll(s)];
  const diffs=window.KESI_DIFFERENCES, found=new Set();
  const view=q('#findViewport'), pair=q('#artPair'), feedback=q('#feedback'), fact=q('#fact');
  let scale=1,tx=0,ty=0,points=new Map(),panStart=null,pinchStart=0,pinchScale=1,moved=false,suppressClick=false,hintTimer;
  const showToast=(text)=>{const el=q('#toast');el.textContent=text;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),1500)};
  const updateTransform=()=>{pair.style.transform=`translate3d(${tx}px,${ty}px,0) scale(${scale})`};
  const setScale=n=>{scale=Math.max(1,Math.min(2.8,n));if(scale===1){tx=0;ty=0}updateTransform()};
  function makeHotspots(){
    for(const [side,container] of [['left',q('#simpleHotspots')],['right',q('#elaborateHotspots')]]){
      for(const d of diffs){const c=d[side],b=document.createElement('button');b.type='button';b.className='hotspot';b.dataset.diff=d.id;b.dataset.side=side;b.setAttribute('aria-label',`标记：${d.name}`);b.style.left=c.x+'%';b.style.top=c.y+'%';b.addEventListener('click',()=>{if(suppressClick)return;activate(d.id,b)});container.appendChild(b)}
    }
  }
  function activate(id,clickedButton){
    const d=diffs.find(x=>x.id===id);if(!d||found.has(id))return;
    // A click is accepted only on one of the registered image regions.
    if(!clickedButton||clickedButton.dataset.diff!==id)return;
    found.add(id);qa(`.hotspot[data-diff="${id}"]`).forEach(el=>el.classList.add('found'));
    q('#progress').textContent=`已发现 ${found.size} / ${diffs.length}`;q('#factTitle').textContent=d.name;q('#factText').textContent=d.explanation;
    fact.classList.add('show');clearTimeout(activate.factTimer);activate.factTimer=setTimeout(()=>fact.classList.remove('show'),2700);
    feedback.textContent=d.explanation;
    q('#toPuzzle').disabled=found.size<diffs.length;
    if(found.size===diffs.length)feedback.textContent='五处图像改动已找到；可以继续比较，也可以开始拼图。';
  }
  makeHotspots();
  // Keep paired artwork on one synchronized camera. A click becomes a pan only after moving.
  view.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;view.setPointerCapture?.(e.pointerId);points.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=false;if(points.size===1)panStart={x:e.clientX,y:e.clientY,tx,ty};else if(points.size===2){const p=[...points.values()];pinchStart=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);pinchScale=scale;panStart=null}},{passive:false});
  view.addEventListener('pointermove',e=>{if(!points.has(e.pointerId))return;points.set(e.pointerId,{x:e.clientX,y:e.clientY});if(points.size===2){const p=[...points.values()],d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);if(pinchStart>0){setScale(pinchScale*d/pinchStart);moved=true}}else if(panStart){const dx=e.clientX-panStart.x,dy=e.clientY-panStart.y;if(Math.hypot(dx,dy)>5)moved=true;tx=panStart.tx+dx;ty=panStart.ty+dy;updateTransform()}},{passive:false});
  const finishPointer=e=>{if(!points.has(e.pointerId))return;points.delete(e.pointerId);if(moved){suppressClick=true;setTimeout(()=>suppressClick=false,350)}if(points.size===1){const p=[...points.values()][0];panStart={x:p.x,y:p.y,tx,ty};pinchStart=0}else{panStart=null;pinchStart=0}};
  view.addEventListener('pointerup',finishPointer);view.addEventListener('pointercancel',finishPointer);
  view.addEventListener('wheel',e=>{e.preventDefault();setScale(scale+(e.deltaY<0?.12:-.12))},{passive:false});
  q('#zoomIn').onclick=()=>setScale(scale+.2);q('#zoomOut').onclick=()=>setScale(scale-.2);q('#viewReset').onclick=()=>{scale=1;tx=ty=0;updateTransform()};
  q('#hint').onclick=()=>{const d=diffs.find(x=>!found.has(x.id));if(!d){showToast('已找到全部五处差异');return}qa(`.hotspot[data-diff="${d.id}"]`).forEach(el=>el.classList.add('hinting'));clearTimeout(hintTimer);hintTimer=setTimeout(()=>qa('.hotspot.hinting').forEach(el=>el.classList.remove('hinting')),1450)};
  const wrong=()=>{if(moved)return;feedback.textContent='这一处暂未发现差异，继续看画面细节。';feedback.classList.add('wrong');setTimeout(()=>feedback.classList.remove('wrong'),250)};
  view.addEventListener('click',e=>{if(!e.target.closest('.hotspot')&&!suppressClick)wrong()});
  // Kept separately for deterministic functional checks and the interactive board below.
  function makeShuffle(total,random=Math.random){const a=Array.from({length:total},(_,i)=>i);for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}if(a.every((v,i)=>v===i)){if(total>1)[a[0],a[1]]=[a[1],a[0]]}return a}
  function swapPieces(a,i,j){if(i===j)return a;const b=a.slice();[b[i],b[j]]=[b[j],b[i]];return b}
  function isSolved(a){return a.every((v,i)=>v===i)}
  window.KESI_PUZZLE_LOGIC={makeShuffle,swapPieces,isSolved};
  const board=q('#board'), difficulty=q('#difficulty'), status=q('#pieceStatus'), selectedNote=q('#selectedNote');let pieces=[],selected=-1,drag=null,blockedClick=false,finished=false;
  function dims(total){return total===6?[2,3]:total===12?[3,4]:[4,5]}
  function paintTile(tile,piece,cols,rows){
    const sourceCol=piece%cols,sourceRow=Math.floor(piece/cols);
    tile.dataset.piece=piece;
    tile.style.backgroundSize=`${cols*100}% ${rows*100}%`;
    tile.style.backgroundPosition=`${cols===1?0:100*sourceCol/(cols-1)}% ${rows===1?0:100*sourceRow/(rows-1)}%`;
    tile.setAttribute('aria-label',`拼图位置 ${Number(tile.dataset.slot)+1}，${pieces[Number(tile.dataset.slot)]===Number(tile.dataset.slot)?'已归位':'未归位'}`);
  }
  function drawBoard(){
    finished=false;selected=-1;drag=null;q('#complete').hidden=true;q('#revealImage').hidden=true;q('#revealImage').classList.remove('show');board.hidden=false;board.classList.remove('finished');
    const total=Number(difficulty.value),[cols,rows]=dims(total);pieces=makeShuffle(total);board.style.gridTemplateColumns=`repeat(${cols},1fr)`;board.style.gridTemplateRows=`repeat(${rows},1fr)`;board.setAttribute('aria-label',`${cols}列${rows}行拼图`);board.replaceChildren();
    pieces.forEach((_piece,slot)=>{const cell=document.createElement('button');cell.type='button';cell.className='tile';cell.dataset.slot=slot;paintTile(cell,pieces[slot],cols,rows);board.appendChild(cell)});
    status.textContent=`0 / ${total} 块在正确位置`;selectedNote.textContent='选择一块，再选择另一块交换';
  }
  function updateBoard(){
    const total=pieces.length,tiles=qa('.tile',board),[cols,rows]=dims(total);let correct=0;
    tiles.forEach((tile,i)=>{paintTile(tile,pieces[i],cols,rows);tile.classList.toggle('correct',pieces[i]===i);tile.classList.toggle('selected',selected===i);if(pieces[i]===i)correct++});
    status.textContent=`${correct} / ${total} 块在正确位置`;
    if(isSolved(pieces))finishPuzzle();
  }
  function swap(i,j){if(i<0||j<0||i>=pieces.length||j>=pieces.length||i===j)return;const tiles=qa('.tile',board);pieces=swapPieces(pieces,i,j);selected=-1;selectedNote.textContent='两块图像已交换；继续观察并拼合。';updateBoard();[tiles[i],tiles[j]].forEach(tile=>{tile.classList.remove('swap-flash');void tile.offsetWidth;tile.classList.add('swap-flash');setTimeout(()=>tile.classList.remove('swap-flash'),320)})}
  function finishPuzzle(){if(finished)return;finished=true;board.classList.add('finished');setTimeout(()=>{if(!finished)return;q('#revealImage').hidden=false;requestAnimationFrame(()=>q('#revealImage').classList.add('show'));setTimeout(()=>q('#complete').hidden=false,550)},650)}
  board.addEventListener('click',e=>{if(blockedClick)return;const tile=e.target.closest('.tile');if(!tile)return;const i=Number(tile.dataset.slot);if(selected<0){selected=i;selectedNote.textContent=`已选第 ${i+1} 块；再选另一块交换。`;updateBoard()}else if(selected===i){selected=-1;selectedNote.textContent='已取消选择';updateBoard()}else swap(selected,i)});
  board.addEventListener('pointerdown',e=>{const tile=e.target.closest('.tile');if(!tile||finished)return;drag={id:Number(tile.dataset.slot),x:e.clientX,y:e.clientY,moved:false,tile,target:null}},{passive:true});
  window.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(dx,dy)>7)drag.moved=true;if(!drag.moved)return;drag.tile.classList.add('is-dragging');drag.tile.style.setProperty('--drag-x',`${dx}px`);drag.tile.style.setProperty('--drag-y',`${dy}px`);const hit=document.elementFromPoint(e.clientX,e.clientY)?.closest('.tile');const target=hit&&hit!==drag.tile?hit:null;if(drag.target!==target){drag.target?.classList.remove('drop-target');drag.target=target;drag.target?.classList.add('drop-target')}e.preventDefault?.()},{passive:false});
  const endDrag=()=>{if(!drag)return;const source=drag;drag=null;source.tile.classList.remove('is-dragging');source.tile.style.removeProperty('--drag-x');source.tile.style.removeProperty('--drag-y');source.target?.classList.remove('drop-target');if(source.moved){blockedClick=true;setTimeout(()=>blockedClick=false,350);if(source.target){swap(source.id,Number(source.target.dataset.slot))}else showToast('将图块拖到另一块上交换；松开后会返回原位')}};
  window.addEventListener('pointerup',endDrag);window.addEventListener('pointercancel',endDrag);
  difficulty.addEventListener('change',drawBoard);q('#shuffleAgain').onclick=drawBoard;q('#playAgain').onclick=drawBoard;q('#chooseDifficulty').onclick=()=>{q('#complete').hidden=true;difficulty.focus()};
  function showPuzzle(){q('#findScreen').classList.remove('active');q('#findScreen').hidden=true;q('#puzzleScreen').hidden=false;q('#puzzleScreen').classList.add('active');drawBoard()}
  q('#toPuzzle').onclick=showPuzzle;
  q('#restart').onclick=()=>{found.clear();qa('.hotspot').forEach(h=>h.classList.remove('found','hinting'));q('#progress').textContent='已发现 0 / 5';q('#toPuzzle').disabled=true;feedback.textContent='观察题名、天空和佛像下方';fact.classList.remove('show');q('#puzzleScreen').classList.remove('active');q('#puzzleScreen').hidden=true;q('#findScreen').hidden=false;q('#findScreen').classList.add('active');scale=1;tx=ty=0;updateTransform();drawBoard()};
  drawBoard();
})();
