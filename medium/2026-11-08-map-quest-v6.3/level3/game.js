(()=>{
  const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const clues=new Set(),banner=q('#clueBanner');
  const modelViewer=window.PUNING_CREATE_VIEWER(q('#view'),({camera,project})=>{
    const targets={roof:{point:[0,-5.5,29.2],yaw:-.55,pitch:.34},volume:{point:[0,0,12],yaw:1.7,pitch:.68}};
    for(const [id,pin] of [['roof',q('#roofPin')],['volume',q('#volumePin')]]){
      const t=targets[id],angle=Math.atan2(Math.sin(camera.yaw-t.yaw),Math.cos(camera.yaw-t.yaw)),pos=project(t.point),visible=Math.abs(angle)<.62&&pos.x>34&&pos.x<canvasWidth() - 34&&pos.y>45&&pos.y<canvasHeight()-35&&!clues.has(id);
      pin.classList.toggle('show',visible);if(visible){pin.style.left=pos.x+'px';pin.style.top=pos.y+'px'}
    }
  });
  function canvasWidth(){return q('#view').clientWidth}function canvasHeight(){return q('#view').clientHeight}
  let insideViewerInstance=null;
  const targetViews={roof:[-.55,.34],volume:[1.7,.68]};
  function toast(message){banner.textContent=message;banner.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>banner.classList.remove('show'),2500)}
  function discover(id){if(clues.has(id))return;clues.add(id);const pin=q(id==='roof'?'#roofPin':'#volumePin');pin.classList.remove('show');pin.classList.add('found');q(`#${id}Found`).textContent='已发现';q(`#${id}Found`).classList.add('yes');q('#clueProgress').textContent=`${clues.size} / 2 线索`;q('#insideButton').disabled=clues.size<2;
    toast(id==='roof'?'檐层线索：模型以多层屋檐组织外观。':'中庭线索：墙窗淡出后，可见模型已有的柱架与回廊。');
  }
  for(const id of ['roof','volume'])q(id==='roof'?'#roofPin':'#volumePin').addEventListener('click',()=>{const [yaw,pitch]=targetViews[id];modelViewer.setCamera(yaw,pitch,720);setTimeout(()=>discover(id),760)});
  function showStep(id){qa('.step').forEach(s=>{s.classList.remove('active');s.hidden=true});const el=q('#'+id);el.hidden=false;el.classList.add('active');requestAnimationFrame(()=>{modelViewer.resize();insideViewerInstance?.resize()})}
  q('#insideButton').addEventListener('click',()=>{if(clues.size<2)return;showStep('insideStep');if(!insideViewerInstance)insideViewerInstance=window.PUNING_CREATE_VIEWER(q('#insideView'));insideViewerInstance.resize()});
  q('#backExplore').onclick=()=>showStep('exploreStep');q('#sectionSlider').addEventListener('input',e=>{insideViewerInstance?.setReveal(+e.target.value);q('#sectionValue').textContent=e.target.value+'%'});
  q('#toPlacement').onclick=()=>{showStep('placementStep');resetPlacement()};q('#backInside').onclick=()=>showStep('insideStep');
  q('#restart').onclick=()=>{clues.clear();['roof','volume'].forEach(id=>{q(`#${id}Found`).textContent='未发现';q(`#${id}Found`).classList.remove('yes');q(id==='roof'?'#roofPin':'#volumePin').classList.remove('found','show')});q('#clueProgress').textContent='0 / 2 线索';q('#insideButton').disabled=true;q('#sectionSlider').value=0;q('#sectionValue').textContent='0%';insideViewerInstance?.reset();modelViewer.reset();showStep('exploreStep');resetPlacement()};
  q('#viewToggle').onclick=()=>{const scene=q('#wallScene');scene.classList.toggle('side-view');q('#viewToggle').textContent=scene.classList.contains('side-view')?'切换正向关系':'切换侧向关系'};
  const stage=q('#roomStage'),scene=q('#wallScene'),art=q('#scrollArt'),zones=qa('.drop-zone'),snapOutline=q('#snapOutline'),status=q('#placementStatus');let drag=null,placedZone=null,basePos={left:0,top:0},sizePct=90,heightVal=50,dragTarget=null;
  function currentSize(){return art.getBoundingClientRect()}
  function startPoint(){let r=scene.getBoundingClientRect();basePos={left:r.width*.82-currentSize().width/2,top:r.height*.60-currentSize().height/2};art.style.left=basePos.left+'px';art.style.top=basePos.top+'px'}
  function updateScale(){art.style.width=`clamp(74px, ${sizePct/10}vw, ${Math.round(142*sizePct/90)}px)`;q('#scaleLabel').textContent=sizePct+'%';if(placedZone)placeAt(placedZone,false)}
  function updateHeight(){heightVal=+q('#heightControl').value;q('#heightLabel').textContent=heightVal<35?'偏低':heightVal>65?'偏高':'中';if(placedZone)placeAt(placedZone,false);else if(!drag)art.style.top=`calc(60% + ${(heightVal-50)*.65}px)`}
  function zoneCenter(z){const a=z.getBoundingClientRect(),b=scene.getBoundingClientRect();return{x:a.left+a.width/2-b.left,y:a.top+a.height/2-b.top}}
  function placeAt(z,animate=true){const p=zoneCenter(z),r=currentSize(),vertical=(heightVal-50)*.45;art.style.left=(p.x-r.width/2)+'px';art.style.top=(p.y-r.height/2-vertical)+'px';art.classList.add('placed');if(animate){art.classList.remove('snap');void art.offsetWidth;art.classList.add('snap')}zones.forEach(x=>x.classList.toggle('occupied',x===z));placedZone=z;dragTarget=null;q('#completeThird').disabled=false;snapOutline.textContent='与研究推定的北向背板位置相符';snapOutline.classList.add('show');status.textContent='已吸附到北向背板示意区域。水平精确位置未见档案记载。';if(animate){stage.classList.add('success');sound();setTimeout(()=>stage.classList.remove('success'),1200)}}
  function sound(){try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const c=new C(),o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.setValueAtTime(660,c.currentTime);o.frequency.exponentialRampToValueAtTime(880,c.currentTime+.12);g.gain.setValueAtTime(.055,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.22);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.23);o.onended=()=>c.close()}catch{}}
  function nearestZone(clientX,clientY){let best=null,dist=Infinity;for(const z of zones){const r=z.getBoundingClientRect(),d=Math.hypot(clientX-(r.left+r.width/2),clientY-(r.top+r.height/2));if(d<dist){best=z;dist=d}}return dist<Math.max(76,currentSize().width*.36)?best:null}
  art.addEventListener('pointerdown',e=>{if(e.button!==undefined&&e.button!==0)return;e.preventDefault();const a=art.getBoundingClientRect(),s=scene.getBoundingClientRect();drag={id:e.pointerId,x:e.clientX,y:e.clientY,offsetX:e.clientX-a.left,offsetY:e.clientY-a.top,startLeft:a.left-s.left,startTop:a.top-s.top};art.setPointerCapture(e.pointerId);art.classList.add('dragging');placedZone=null;zones.forEach(z=>z.classList.remove('occupied'))});
  art.addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;const s=scene.getBoundingClientRect();art.style.left=(e.clientX-s.left-drag.offsetX)+'px';art.style.top=(e.clientY-s.top-drag.offsetY)+'px';dragTarget=nearestZone(e.clientX,e.clientY);zones.forEach(z=>z.classList.toggle('active',z===dragTarget));snapOutline.classList.toggle('show',!!dragTarget)});
  function endDrag(e){if(!drag||e.pointerId!==drag.id)return;art.classList.remove('dragging');zones.forEach(z=>z.classList.remove('active'));drag=null;if(dragTarget){placeAt(dragTarget,true)}else{art.classList.remove('placed');q('#completeThird').disabled=true;snapOutline.classList.remove('show');status.textContent='画样已放在自由位置；靠近背板轮廓可吸附。'}dragTarget=null}
  art.addEventListener('pointerup',endDrag);art.addEventListener('pointercancel',endDrag);
  q('#scaleControl').addEventListener('input',e=>{sizePct=+e.target.value;updateScale()});q('#heightControl').addEventListener('input',updateHeight);
  function resetPlacement(){placedZone=null;drag=null;zones.forEach(z=>z.classList.remove('active','occupied'));art.classList.remove('placed','dragging','snap');art.style.width='clamp(74px, 9vw, 142px)';art.style.left='83%';art.style.top='61%';sizePct=90;heightVal=50;q('#scaleControl').value=90;q('#heightControl').value=50;q('#scaleLabel').textContent='90%';q('#heightLabel').textContent='中';q('#completeThird').disabled=true;snapOutline.classList.remove('show');scene.classList.remove('side-view');q('#viewToggle').textContent='切换侧向关系';status.textContent='拖动画样至背板候选位置；可调整比例和高度。'}
  q('#placeReset').onclick=resetPlacement;q('#completeThird').onclick=()=>{if(!placedZone)return;showStep('finishStep')};q('#redoPlacement').onclick=()=>{showStep('placementStep');resetPlacement()};q('#endGame').onclick=()=>{q('#endGame').textContent='中级游戏已完成';q('#endGame').disabled=true};q('#showFullArt').onclick=()=>q('#fullArtView').hidden=false;q('#closeFullArt').onclick=()=>q('#fullArtView').hidden=true;
  q('#scaleControl').dispatchEvent(new Event('input'));modelViewer.resize();
})();
