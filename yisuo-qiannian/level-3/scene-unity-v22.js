/* v22: one connected commission route, physical objects, persistent next-action cues. */
const v22StateBefore=westState;
westState=function(){let p=v22StateBefore();if(p.guideVersion!==22){p.guideVersion=22;if(easy.step===0&&!p.read){p.westStage='plan';p.walk=0;easy.courtInfo=null;easy.place=null}}return p};
function v22GoWest(){westStop();let p=westState();p.westStage='courtyard';p.walk=0;easy.courtInfo=null;easy.place=null;easyRender()}
const v22CourtBefore=courtVisit;
courtVisit=function(where){if(easy.step===0&&where==='west'){v22GoWest();return}v22CourtBefore(where)};
const v22ContentBefore=easyContent;
easyContent=function(){if(s.ch===0&&easy.step===0&&easy.courtInfo==='east')return '<div class="easy-dialog court-dialog"><div class="easy-speaker">库堂分办</div><h3>本次缂丝差货，归西库堂接洽。</h3><p>东、西库堂各有所司。我须到西库堂核领差单。</p><button onclick="v22GoWest()">去西库堂接洽 →</button></div>';return v22ContentBefore()};
handsEventMarkup=function(){let old=workshop().orders[0].worker;return `<div class="easy-dialog hands-event"><div class="easy-speaker">${easyNames[old]} · 缺料停机</div><h3>捻金线将尽，先停这一处。</h3><p>把备用金线拖给原户，或把未完任务交给另一户。</p><div class="hands-event-objects"><button data-hands-drag="reserve" onclick="handsEventChoice('help')" aria-label="备用捻金线">${craftSilkGroup(['#b79a5e','#c4a56a'])}<b>备用捻金线</b><small>拖给${easyNames[old]}<br>补料 · 两日</small></button><button data-hands-drag="handover" onclick="handsEventChoice('share')" aria-label="把未完任务拖给另一户"><span class="v22-task-case">${craftChest(2)}</span><b>未完任务与余料</b><small>拖给另一户<br>交接 · 一日</small></button></div></div>`};
function v22Cues(scene){
 const visible=selector=>[...scene.querySelectorAll(selector)].filter(el=>!el.disabled&&!el.hidden&&el.getClientRects().length);
 if(scene.querySelector('.detail-weaving,.boss-options')||scene.querySelector('.west-brush')){
  kesiGuideChoices(scene,[]);return;
 }
 let selectors;
 if(easy.step===0){
  const p=westState();
  selectors=p.westStage==='plan'?['.court-dialog button','.court-plaque.west']:
   p.westStage==='courtyard'?['.west-walk-button']:p.westStage==='returning'?['.craft-walk']:
   p.westStage==='carrying'?['.west-return-button']:p.westStage==='signed'?['.west-folded-order','.west-document-bag']:
   p.read?[]:['.west-order-object','.west-receive-target'];
 }else{
  selectors=[
   '.v40-allocation > div > button','.hands-skein:not(.put)','.hands-panel footer button',
   '.hands-event-objects button','.v22-next','.easy-options button','.boss-options button',
   '.detail-inspection .hands-lens.visible','.detail-inspection .hands-unroll-grip',
   '.detail-inspection button.primary','.hands-load-parcel:not(.loaded)',
   '.hands-load button:not(.loaded)','.v27-ship-ready','.hands-finished-cloth','.court-focus',
   '.easy-place.glow','.craft-material-chest','.hands-satchel',
   '[data-craft-drag="rope"]','[data-craft-drag="case"]','[data-hands-drag="paper"]',
   '[data-hands-drag="stamp"]','.primary','.easy-bundle:not(.assigned)'
  ];
 }
 for(const selector of selectors){
  const choices=visible(selector);
  if(choices.length){kesiGuideChoices(scene,selector==='.easy-place.glow'&&choices.length>1?[]:choices);return}
 }
 kesiGuideChoices(scene,[]);
}
const v22RenderBefore=easyRender;
easyRender=function(){westState();v22RenderBefore();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;let p=westState();scene.querySelector('.west-up-button')?.remove();scene.querySelector('.craft-route-look')?.remove();if(easy.step===0){if(p.westStage==='plan'){let guide=scene.querySelector('.easy-guide');guide.innerHTML='<small>第一幕 · 织造署总院落</small><h2>我是苏州纱缎庄掌柜</h2><p>我熟悉缂丝，以“包口”身份承接织差货，负责联络织户、分料、收货与成品质量。今日宫中下旨，我先到西库堂接差。</p>';scene.querySelector('.court-nameplate small')?.replaceChildren(document.createTextNode('总院落 · 格局示意'));}else{scene.querySelector('.easy-guide')?.remove();if(p.westStage==='courtyard'){scene.querySelector('.west-intent').innerHTML='<h2>我来西库堂接差</h2>';scene.querySelector('.west-plan-button')?.remove();}if(p.westStage==='signed'){let paper=scene.querySelector('.west-folded-order');paper.innerHTML='<svg viewBox="0 0 300 155" preserveAspectRatio="none" aria-hidden="true"><path d="M18 9 L280 9 296 146 2 146Z" fill="#eee5cd" stroke="#b4a689"/><g transform="matrix(1 0 .07 .78 -4 14)" fill="#4e493c" font-family="KaiTi,STKaiti,serif" text-anchor="middle"><text x="148" y="44" font-size="23" letter-spacing="5">西库堂差单</text><text x="148" y="78" font-size="14">按样承造 · 九十日交期</text><text x="148" y="111" font-size="15" fill="#944c39">承造人已签收</text></g></svg>';}
if(p.westStage==='carrying'){scene.querySelector('.west-held-document')?.remove();scene.querySelector('.fp-body-hands')?.remove();scene.querySelector('.west-entry').insertAdjacentHTML('beforeend','<div class="v22-held-case" aria-label="我双手托住收好差单的文书匣"></div>');}}
}scene.querySelectorAll('.court-village').forEach(el=>el.innerHTML='<span>陆墓</span><b>张花村</b>');scene.querySelectorAll('.easy-place').forEach(el=>{if(/封门差船|葑门差船|葑门外差船/.test(el.textContent)){el.innerHTML='<span class="v22-flag-cloth">差船</span>';el.classList.add('v22-ship-flag');el.setAttribute('aria-label','差船')}});v22Cues(scene);easySave()};
easyRender();
