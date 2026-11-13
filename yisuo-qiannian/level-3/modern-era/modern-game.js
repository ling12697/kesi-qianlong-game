const M52_NAMES={studio:'我的工作室',repair:'研究院协作',design:'高校共创',store:'缂丝门店',museum:'博物馆展厅',media:'工作室拍摄'};
const M52_TASKS={studio:'游客想知道：牡丹花纹是绣上去的吗？',repair:'接修复委托，核对照片、记录与病害位置。',design:'与师生选用途、纹样、配色，试合后制作单品。',store:'带共创单品到门店，陈列、配说明，再回应游客。',museum:'带修复成果与档案到展厅，布置作品说明。',media:'用三段镜头讲手艺，预览后选择传播方式。'};
/* Contemporary chapter. Earlier chapters keep their original renderers and storage. */
const M3_KEY=(globalThis.KESI_STORAGE_PREFIX||'')+'kesi-contemporary-studio-v1';
function m3Fresh(){return{version:1,scene:'map',hours:0,brief:[],repair:{marks:[],aligned:false,approach:null,until:0,started:0,ready:false,handed:false},design:{kind:null,motif:null,color:null,scale:75,batch:null,until:0,started:0,stock:0,made:0},store:{placed:false,label:false,served:false},learner:false,gallery:{panels:[null,null,null],open:false},media:{slots:[null,null,null],channel:null,published:false,releases:0,playing:false,playIndex:0,playUntil:0,feedback:[]},journal:[],selected:null,pane:null,menu:false,finished:false}}
let m3;try{m3=JSON.parse(localStorage.getItem(M3_KEY))}catch{}if(!m3||m3.version!==1||m3.gallery?.panels?.length!==3)m3=m3Fresh();m3.media.playing=false;
function m3Save(){localStorage.setItem(M3_KEY,JSON.stringify(m3))}
function m3Log(key,text){if(!m3.journal.some(x=>x.key===key))m3.journal.unshift({key,text,hours:m3.hours});m3Save()}
function m3Toast(text){document.querySelector('.m3-toast')?.remove();let n=document.createElement('div');n.className='m3-toast';n.setAttribute('role','status');n.textContent=text;document.querySelector('.m3-world')?.append(n);setTimeout(()=>n.remove(),3200)}
function m3LectureDone(){return m3.learner&&m3.demo53Completed!==false}
function m3FilmingReady(){return m3LectureDone()&&m3.repair.handed&&m3.gallery.open&&m3.design.made>0&&m3.store.served}
if(m3.scene==='media'&&!m3FilmingReady()){m3.scene='map';m3.pane=null}
function m3Visit(scene){if(s.ch!==2)return;if(scene==='media'&&(!['map','studio'].includes(m3.scene)||!m3FilmingReady()))scene='map';m3.scene=scene;m3.pane=null;m3.selected=null;m3.media.playing=false;m3Save();m3Render()}
function m3Next(){
  const r=m3.repair,d=m3.design;
  if(!m3LectureDone())return 'studio';
  if(!r.approach)return 'repair';
  if(!d.batch)return 'design';
  if(r.ready&&!m3.gallery.open)return 'museum';
  if(d.made&&!m3.store.served)return 'store';
  if(!r.ready)return 'repair';
  if(!d.made)return 'design';
  return m3FilmingReady()&&!m3.media.published?'media':null;
}
function m3Complete(){return m3FilmingReady()&&m3.media.published}
function m3Tap(action){if(m3Drag?.moved||Date.now()<m3Suppress)return;const [kind,v]=action.split(':');if(kind==='slot'&&m3.selected&&m3.selected!==action){m3Apply(m3.selected,'timeline:'+v);return}const defaults={doc:'dossier',trace:'reference',plan:'repair-plan',archive:'museum',form:'design',motif:'design',color:'design',batch:'batch',sample:'visitor:learner',label:'label'};if(kind==='tool'&&v==='loupe'){m3.selected=m3.selected===action?null:action;m3Render();return}if(kind==='clip'){const empty=m3.media.slots.indexOf(null);if(empty>=0&&!m3.media.slots.includes(v)){m3Apply(action,'timeline:'+empty);return}}if(kind==='panel'){const empty=m3.gallery.panels.indexOf(null);if(empty>=0){m3Apply(action,'panel:'+empty);return}}if(kind==='product'){m3Apply(action,!m3.store.placed?'shelf':'visitor:user');return}if(kind==='sample'&&m3.learner){m3.demo52=0;m3.pane='demo';m3Render();return}if(defaults[kind]){m3Apply(action,defaults[kind]);return}m3.selected=m3.selected===action?null:action;m3Save();m3Render()}
function m3Drop(zone){if(m3.selected){if(!m3Apply(m3.selected,zone))m3Toast('请放到框亮的位置；也可直接点击对应物件。');return}if(zone.startsWith('mark:')){m3InspectMark(+zone.split(':')[1]);return}const actions={'visitor:learner':'sample:show',reference:'trace:align',label:'label:craft','visitor:user':'product:serve',shelf:'product:serve',museum:'archive:hand'};if(zone.startsWith('channel:')){if(!m3.media.slots.every(Boolean)){m3Toast('先在下方排好三段镜头。');return}m3Apply('edit:release',zone);return}if(zone==='visitor:learner'&&m3.learner){m3.demo52=0;m3.pane='demo';m3Render();return}if(actions[zone])m3Apply(actions[zone],zone);else m3Toast('先选框亮的物件，也可以拖到这里。')}
function m3Apply(action,zone){if(s.ch!==2||m3.finished)return false;let[kind,v]=action.split(':'),r=m3.repair,d=m3.design,changed=false;
if(kind==='doc'&&zone==='dossier'&&!m3.brief.includes(v)){m3.brief.push(v);changed=true;m3Log('doc-'+v,'核对'+({condition:'现状照片',record:'既有记录',brief:'修复委托'}[v])+'，收入修复档案夹。')}
if(kind==='tool'&&v==='loupe'&&zone.startsWith('mark:'))return m3InspectMark(+zone.split(':')[1]);
if(kind==='trace'&&zone==='reference'&&r.marks.length===2&&!r.aligned){r.aligned=true;changed=true;m3Log('trace','纹样对照图与现状照片定位一致，修复方案有了共同参照。')}
if(kind==='plan'&&zone==='repair-plan'&&r.aligned&&!r.approach){r.approach=v;r.started=Date.now();r.until=r.started+(v==='consult'?16000:11000);m3.hours+=v==='consult'?4:2;changed=true;m3Log('repair-plan',v==='consult'?'与研究院补充会商，对照记录后开展修复协作；投入四工时。':'依据现有记录核对方案，进入修复协作；投入两工时。')}
if(kind==='archive'&&zone==='museum'&&r.ready&&!r.handed){r.handed=true;m3.hours++;changed=true;m3Log('museum-transfer','作品连同现状、处理与复核记录交至展陈环节。')}
if(kind==='panel'&&zone.startsWith('panel:')&&r.handed&&!m3.gallery.open){let i=+zone.split(':')[1],old=m3.gallery.panels.indexOf(v);if(old>=0)m3.gallery.panels[old]=null;m3.gallery.panels[i]=v;changed=true}
if(['form','motif','color'].includes(kind)&&zone==='design'&&!d.batch){d[{form:'kind',motif:'motif',color:'color'}[kind]]=v;changed=true}
if(kind==='batch'&&zone==='batch'&&d.kind&&d.motif&&d.color&&!d.batch){
  const limit=m3FitLimit(d);
  if(d.scale>limit){m3Toast('请将纹样比例调至'+limit+'%以内，再选择制作数量。');return false}
  d.batch=v;d.started=Date.now();d.until=d.started+(v==='small'?9000:15000);m3.hours+=v==='small'?3:5;changed=true;m3Log('batch',v==='small'?'确定六件小批制作，先观察门店反馈。':'确定十二件常规批次，为后续展示与销售备货。')}
if(kind==='product'&&zone==='shelf'&&d.stock>0&&!m3.store.placed){m3.store.placed=true;changed=true;m3Log('display','将'+m3ProductName()+'置入门店橱窗，实物与说明一起展示。')}
if(kind==='label'&&zone==='label'&&m3.store.placed&&!m3.store.label){m3.store.label=true;changed=true}
if(kind==='sample'&&zone==='visitor:learner'&&!m3.learner){m3.demo52=0;m3.demo53Completed=false;changed=true;m3.pane='demo'}
if(kind==='product'&&zone==='visitor:user'&&d.stock>0&&!m3.store.served){if(!m3.store.placed||!m3.store.label){m3Toast('先把实物与工艺说明放进橱窗，游客才能了解这件单品。');return false}d.stock--;m3.store.served=true;m3.hours++;changed=true;m3Log('visitor-product','游客试用后选走一件'+m3ProductName()+'，并带走通经断纬的工艺说明。')}
if(kind==='clip'&&Object.hasOwn(M3_SHOTS,v)&&zone.startsWith('timeline:')&&!m3.media.playing){let i=+zone.split(':')[1],old=m3.media.slots.indexOf(v);if(old>=0)m3.media.slots[old]=m3.media.slots[i];m3.media.slots[i]=v;m3.media.focus=i;changed=true}
if(kind==='slot'&&zone.startsWith('timeline:')&&!m3.media.playing){let i=+zone.split(':')[1],old=+v;[m3.media.slots[i],m3.media.slots[old]]=[m3.media.slots[old],m3.media.slots[i]];m3.media.focus=i;changed=true}
if(kind==='edit'&&zone.startsWith('channel:')&&m3FilmingReady()&&m3.media.slots.every(Boolean)){let channel=zone.split(':')[1];m3.media.channel=channel;m3.media.published=true;m3.media.releases++;m3.hours+=2;const has=m3.media.slots.includes('hands'),first=m3.media.slots[0];m3.media.teaches=has;m3.media.feedback=[has?'观众：原来织工要一梭一梭地织出图案。':'观众：作品很美，缂丝到底是怎样织出来的？',first==='product'?'观众：日常单品在哪里能看到？':first==='voice'?'观众：想听听您的传承经历。':'观众：想在工作室近看制作。'];changed=true;m3.pane='feedback';m3Log('release-'+m3.media.releases,'完成'+({tv:'专题供稿',short:'短视频',note:'图文笔记'}[channel])+'模拟传播，镜头顺序为'+m3.media.slots.map(k=>M3_SHOTS[k].name).join('、')+'；观众提出了新的问题。')}
if(changed){m3.selected=null;m3Save();m3Render();return true}return false}
function m3FitLimit(d=m3.design){return d.motif==='wave'||d.kind==='card'?90:65}
function m3UpdateFit(){const invalid=m3.design.scale>m3FitLimit();document.querySelectorAll('.m3-batch-options button').forEach(b=>b.disabled=invalid);const hint=document.querySelector('.m52-action-hint');if(hint&&m3.scene==='design')hint.textContent=m3Hint52()}
function m3Scale(v){m3.design.scale=+v;let n=document.querySelector('.m3-prototype-art');if(n)n.innerHTML=m3Product();let text=document.querySelector('.m3-scale-value');if(text)text.textContent=v+'%';m3Save();m3UpdateFit();document.querySelector('.m52-guide')?.classList.remove('m52-guide');m3Guide52()}
function m3OpenGallery(){if(!m3.repair.handed||!m3.gallery.panels.every(Boolean)||m3.gallery.open)return;m3.gallery.open=true;m3.hours+=2;m3Log('gallery','展陈同时呈现作品、修复过程与缂丝原理，观众可沿说明继续了解。');m3Render()}
function m3Play(){if(!m3.media.slots.every(Boolean)||m3.media.playing)return;m3.media.customize=false;m3.selected=null;m3.media.playing=true;m3.media.playIndex=0;m3.media.playUntil=Date.now()+2200;m3Render()}
function m3Finish(){if(!m3Complete()||m3.finished)return;m3.finished=true;m3.scene='end';m3.pane=null;s.complete[2]=(m3.media.teaches??m3.media.slots.includes('hands'))?100:90;save();m3Log('finished','这一轮工作完成：修复交展、师生共创、游客接待与传播相互连接。');m3Render()}
function m3Tick(){if(s.ch!==2||m3HeldPointer!==null)return;let now=Date.now(),changed=false,r=m3.repair,d=m3.design;for(let [task,selector,percent,key] of [[r,'.m3-restoration-preview','.m3-repair-percent','repair'],[d,'.m3-batch-progress','.m3-batch-percent','stock']]){if(!task.until)continue;let p=Math.min(1,(now-task.started)/(task.until-task.started));document.querySelector(selector)?.style.setProperty('--progress',p);let label=document.querySelector(percent);if(label)label.textContent=Math.round(p*100)+'%';if(now>=task.until){task.until=0;changed=true;if(key==='repair'){r.ready=true;m3Log('repair-ready','修复协作与复核完成，档案记录可随作品交展。')}else{d.made=d.batch==='small'?6:12;d.stock=d.made;m3Log('stock-ready',d.made+'件'+m3ProductName()+'完成，等待橱窗展示与游客试用。')}}}if(m3.media.playing&&now>=m3.media.playUntil){m3.media.playIndex++;if(m3.media.playIndex>=3){m3.media.playing=false;m3.media.playIndex=0;m3.media.previewed=m3.media.slots.join(',')}else m3.media.playUntil=now+2200;changed=true}if(changed){m3Save();m3Render()}}
setInterval(m3Tick,300);
const M3_SHOTS={
  hands:{name:'制作近景',caption:'织工在机架前投梭缂织。',image:'modern-era/studio-filming60.lite.webp'},
  product:{name:'单品与用途',caption:'把缂丝带进日常使用。',image:'modern-era/store.lite.webp'},
  voice:{name:'传承人讲述',caption:'修复、共创与接待，让手艺继续被理解。',image:'modern-era/repair.lite.webp'},
  court:{name:'清代织造署',caption:'从织造署接领承造差单。',image:'court-spring.lite.webp'},
  trial:{name:'外销试织',caption:'用来样箔料试织，调整工艺。',image:'export-era/trial.lite.webp'},
  codesign:{name:'高校共创',caption:'师生一起试配纹样、色彩和日用小物。',image:'modern-era/design.lite.webp'}
};
if(m3.media.slots.some(key=>key&&!Object.hasOwn(M3_SHOTS,key))){
  if(m3.media.published)m3.media.teaches=m3.media.slots.includes('principle');
  m3.media.slots=m3.media.slots.map(key=>Object.hasOwn(M3_SHOTS,key)?key:null);
  m3.media.previewed=null;
}
const M3_PANELS={identity:{name:'作品信息',text:'花鸟纹缂丝 · 情境作品。纹样由彩纬分区织成。'},process:{name:'修复过程',text:'现状记录、纹样对照、方案会商与复核随作品交展。'},principle:{name:'缂丝原理',text:'通经断纬：经线贯通全幅，纬线随纹样换色、分区织入。'}};
function m3ProductName(){return m3.design.kind==='clip'?'缂丝发夹':'缂丝卡包'}
function m3Art(condition=false,restored=false){return `<svg viewBox="0 0 720 480" role="img" aria-label="花鸟纹缂丝情境作品${condition?'现状照片':'图案'}"><image href="modern-era/artwork.lite.webp" width="720" height="480" preserveAspectRatio="none"/>${condition&&!restored?'<path d="M287 223l6-2 4 3 7-5 4 3 6-1 3 5 7 1-3 5 5 3-4 6-6-1-4 4-5-3-7 2-4-4-6 1 2-6-5-5Z" fill="#e7e1d0" stroke="#b1a78a" stroke-width=".8"/><g stroke="#d9ccac" fill="none" stroke-width=".7"><path d="M290 229h30m-28 4h30m-25 4h22"/></g><g stroke="#e9ddbd" fill="none" stroke-width="1.1"><path d="M481 411q12-8 23-1t23-2M481 415q12-8 23-1t23-2M481 419q12-8 23-1t23-2"/></g>':''}${restored?'<path d="M287 223l17-4 20 8-3 15-23 1-9-10Z" fill="none" stroke="#a69c7e" stroke-width=".6" stroke-dasharray="2 3"/>':''}</svg>`}
let m3ProductSerial=0;
function m3FlowerBranch(){
  const bloom=`<path d="M-29 5Q-38-5-26-15Q-28-29-12-28Q-4-39 8-30Q24-36 28-19Q43-17 38-2Q47 10 30 19Q25 31 8 27Q-5 39-19 25Q-36 23-29 5Z" fill="#d5ac89" stroke="#8e6259" stroke-width="1.2"/>
    <path d="M-26 9Q-20-4-8-2Q-21-8-18-19Q-8-24 0-11Q1-27 12-25Q22-22 14-9Q25-18 32-9Q33 2 20 5Q32 6 29 15Q20 22 9 16Q11 28 0 27Q-10 25-9 14Q-19 23-26 15Z" fill="#eed3ad" stroke="#a47162" stroke-width=".95"/>
    <path d="M-12 5Q-15-6-6-10Q2-10 4-4Q9-12 16-6Q23 2 14 10Q6 20-4 15Q-13 14-12 5Z" fill="#f5dfb6" stroke="#be8b69" stroke-width=".8"/>
    <path d="M-7 4l6 2m0-5 4 4m3-7v6m5-4-2 5m4 0-3 3" stroke="#a97747" stroke-width="1.6" stroke-linecap="round"/>`;
  return `<g fill="none" stroke="#d6d7ac" stroke-width="2.4" stroke-linecap="round">
    <path d="M-162 48C-98 18-70 23-27 1S61-23 155-48M-86 26Q-96 1-117-18M7-11Q34 5 65 35M79-30Q100-49 106-62"/>
    </g><g fill="#b5bf96" stroke="#556f60" stroke-width="1.05">
      <path d="M-79 21Q-110 25-130 7Q-110-3-79 21ZM-64 18Q-65-6-45-16Q-41 3-64 18ZM12-9Q29-38 50-38Q45-17 12-9ZM45 19Q69 9 89 21Q69 35 45 19ZM82-30Q103-18 121-25Q116-38 82-30ZM101-49Q92-63 99-74Q111-65 101-49Z"/>
      <path d="M-118-16q-18-6-17-18q10-10 21 6q2 6-4 12Z" fill="#dab18e"/>
      <path d="M151-47q4-17 20-20q5 11-8 21Z" fill="#e3c49c"/>
    </g><g transform="translate(-26 -4) rotate(-17)">${bloom}</g><g transform="translate(67 36) rotate(21) scale(.62)">${bloom}</g>`;
}
function m3Product(){
  const d=m3.design, gold=d.color==='ochre';
  const c=gold?'#a87e53':'#637e73', light=gold?'#ceb387':'#9bafa0';
  const id='m3-product-'+(++m3ProductSerial);return `<svg viewBox="0 0 480 250" role="img" aria-label="${m3ProductName()}设计样品"><defs>
  <linearGradient id="${id}-silk" x2=".35" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="${light}"/><stop offset=".52" stop-color="${c}"/><stop offset="1" stop-color="${light}"/></linearGradient>
  <pattern id="${id}-weave" width="5" height="4" patternUnits="userSpaceOnUse"><path d="M0 .8H5M0 2.8H5" stroke="#fff1cc" stroke-opacity=".45" stroke-width=".65"/><path d="M.8 0V4M3.3 0V4" stroke="#3f4338" stroke-opacity=".38" stroke-width=".65"/></pattern>
  <clipPath id="${id}-mask"><${d.kind==='clip'?'rect x="60" y="92" width="360" height="65" rx="28"':'rect x="80" y="30" width="320" height="195" rx="13"'}/></clipPath></defs><g clip-path="url(#${id}-mask)"><rect width="480" height="250" fill="url(#${id}-silk)"/><g transform="translate(240 125) scale(${d.scale/100})">${d.motif==='wave'?'<g fill="none" stroke="#ece1c0" stroke-width="4">'+[-90,-45,0,45,90].map(y=>[-7,0,7].map((offset,i)=>`<path d="M-250 ${y+offset}q60-45 120 0t120 0t120 0t120 0" stroke="${['#ddd5ab','#e9debd','#b8a47f'][i]}" stroke-width="${i===1?3:1.6}"/>`).join('')).join('')+'</g>':m3FlowerBranch()}</g><rect width="480" height="250" fill="url(#${id}-weave)"/></g>${d.kind==='clip'?'<rect x="60" y="92" width="360" height="65" rx="28" fill="none" stroke="#77796a" stroke-width="3"/><path d="M80 166H400q-5 13-30 13H100q-17 0-20-13" fill="#a8aca4" stroke="#797f74"/>':'<rect x="80" y="30" width="320" height="195" rx="13" fill="none" stroke="#6f8171" stroke-width="3"/><path d="M90 137Q240 160 390 137V213H90Z" fill="#d6d9bd" fill-opacity=".35" stroke="#6f8171"/><path d="M91 42H389V212H91Z" fill="none" stroke="#ece4ce" stroke-width="1.3" stroke-dasharray="3 4"/>'}</svg>`}
function m3Object(action,name,art='',cls=''){return `<button class="m3-object ${cls} ${m3.selected===action?'is-selected':''}" data-m3-drag="${action}" onclick="event.stopPropagation();m3Tap('${action}')">${art}<b>${name}</b></button>`}
function m3Target(zone,text,cls=''){return `<button class="m3-target ${cls}" data-m3-drop="${zone}" onclick="m3Drop('${zone}')">${text}</button>`}
function m3Header(){let t={map:['我是缂丝非遗传承人','在寒山寺畔经营工作室，把修复、共创与接待串起来。'],studio:m3FilmingReady()?['回到工作室准备拍摄','把这一路的缂丝故事讲给更多人。']:['游客来到我的案前','用一件实物，回应一个具体的问题。'],repair:['我与研究院核对修复委托','看清现状、对照资料，再将成果与记录一同交展。'],design:['我和师生一起做件日用小物','纹样、配色与用途，需要放在一起试。'],store:['让单品在橱窗里被看见','实物与工艺说明，同游客一起带走。'],museum:['修复完成，故事还要继续','作品、过程和原理，可以有不同的观看顺序。'],media:['把手艺讲给镜头前的人','镜头可以重排，发布后看看观众想问什么。'],end:['手艺，在往来中继续','这一轮工作留下了作品，也回应了新的需求。']}[m3.scene];return `<div class="m3-brand">缂丝经纬<small>第三关 · 今日承业</small></div><header class="m3-heading"><small>当代 · 寒山寺畔工作室</small><h2>${t[0]}</h2><p>${t[1]}</p></header><nav class="m3-tools"><button onclick="m3Visit('map')">返回地图</button><button onclick="full()">全屏</button><button onclick="m3.menu=!m3.menu;m3Render()" aria-label="第三关菜单">⋯</button></nav><div class="m3-status">本轮投入 ${m3.hours} 工时 · 游客回应 ${Number(m3.learner)+Number(m3.store.served)}/2</div>`}
function m3Map(){const next=m3Next(),studioDetail=!m3LectureDone()?'回应游客':m3FilmingReady()?(m3.media.published?'拍摄已完成':'拍摄准备就绪'):'游客讲解已完成',nodes=[['studio','我的工作室',19,43,studioDetail],['repair','研究院协作',23,74,m3.repair.ready?'修复已复核':m3.repair.until?'协作进行中':'接洽修复委托'],['design','高校共创',85,39,m3.design.made?'单品已完成':m3.design.until?'制作进行中':'选用途、纹样与配色'],['store','缂丝门店',80,73,m3.store.served?'接待已完成':'陈列与游客试用'],['museum','博物馆展厅',55,25,m3.gallery.open?'展陈已开放':'作品与记录一起交展']];return `<svg class="m52-map-links" viewBox="0 0 1000 562" preserveAspectRatio="none" aria-hidden="true"><path d="M190 242Q100 350 230 416M230 416Q390 360 550 141M190 242Q550 350 850 220M850 220Q930 330 800 410"/></svg>${nodes.map(([k,t,x,y,detail])=>`<button class="m3-map-node ${k===(next==='media'?'studio':next)?'m3-next m52-map-current':''}" style="left:${x}%;top:${y}%" onclick="m3Visit('${k}')">${t}<small>${detail}</small></button>`).join('')}`}
function m3Studio() {
  const done = m3LectureDone(), ready=m3FilmingReady();
  return `<div class="m3-studio-sample"><button class="m3-object m53-flat-sample" data-m3-drag="sample:show"
    onclick="event.stopPropagation();m3Tap('sample:show')" aria-label="牡丹教学样片 · 点击近看讲解">
    ${m3Sample52()}</button><span class="m53-sample-name">牡丹教学样片 · 点击近看讲解</span></div>
    ${ready?'':`<div class="m3-visitor-question" data-m3-drop="visitor:learner"><small>游客 · 孩子的提问</small>
    <b>${done?'原来花纹是用彩纬织成的！':'这朵牡丹，是拿针绣上去的吗？'}</b></div>`}
    ${done?`<div class="m54-studio-next"><button class="m52-scene-next m3-next" onclick="m3Visit('${ready?'media':'map'}')">${ready?(m3.media.published?'查看拍摄':'开始拍摄'):'讲解完成 · 回地图接下一项任务'} →</button></div>`:''}`;
}

function m3Repair(){const r=m3.repair;return `${m3.brief.length<3?`<div class="m3-repair-docs">${[['condition','现状照片'],['record','既有记录'],['brief','修复委托']].map(([k,t])=>m3.brief.includes(k)?`<small>✓ ${t} · 已核</small>`:m3Object('doc:'+k,t,'<span class="m3-paper"></span>')).join('')}</div>`:''}${m3.brief.length<3?m3Target('dossier',`<b>修复档案夹</b><small>${m3.brief.length}/3 份已核</small>`,'m3-dossier'):''}${m3.brief.length===3?`<div ${r.marks.length===2&&!r.aligned?'data-m3-drop="reference"':''} class="m3-condition-art ${r.ready?'is-restored':''}">${m3Art(true,r.ready)}${r.aligned&&!r.approach?`<div class="m56-aligned-pattern">${m3Art()}</div>`:''}${!r.ready?[[43,48,0],[70,87,1]].map(([x,y,i])=>`<button class="m3-condition-mark ${r.marks.includes(i)?'is-marked':''}" ${i===m3NextMark()?`data-m3-drop="mark:${i}"`:'disabled'} style="left:${x}%;top:${y}%" onclick="if(m3.selected==='tool:loupe')m3InspectMark(${i})">${r.marks.includes(i)?'✓':i+1}</button>`).join(''):''}<small>${r.ready?'修复后复核图 · 情境示意':r.aligned&&!r.approach?'纹样已对照 · 请选择修复方案':'现状照片'}</small></div>${r.marks.length<2?m3Object('tool:loupe','拖到瑕疵处查看','<span class="m3-loupe-icon"></span>','m3-loupe'):''}${r.marks.length===2&&!r.aligned?`${m3Object('trace:align','将纹样记录与现状照片对照',m3Art(),'m3-trace-sheet')}`:''}${r.aligned&&!r.approach?`<div class="m3-repair-plans">${m3Object('plan:record','按既有记录核对','<small>点击开展协作 · 2工时</small>')}${m3Object('plan:consult','补充研究院会商','<small>点击开展协作 · 4工时</small>')}</div>`:''}${r.until?`<div class="m3-restoration-preview" style="--progress:${Math.max(0,(Date.now()-r.started)/(r.until-r.started))}"><span>方案已交接 · 修复与复核中 <b class="m3-repair-percent">进行中</b></span><i></i><small>完成后，地图上的展厅会提示交展。</small><button onclick="m3Visit('map')">回地图安排其他工作 →</button></div>`:''}${r.ready?`<button class="m3-repair-next m3-next" onclick="m3Visit('map')">修复已复核 · 带作品与记录回地图 →</button>`:''}`:''}<div class="m3-repair-footnote">情境演示：检查、记录、会商与复核；不模拟对真实文物直接动针。</div>`}
function m3Design(){const d=m3.design,choice=(action,name,art,chosen)=>m3Object(action,(chosen?'✓ ':'')+name,art,chosen?'m52-choice-picked':'');return `<div class="m3-design-tools">${!d.batch&&!d.kind?`<small>① 选一种用途</small><div>${choice('form:card','卡包','<span class="m3-form-card"></span>',d.kind==='card')}${choice('form:clip','发夹','<span class="m3-form-clip"></span>',d.kind==='clip')}</div>`:''}${!d.batch&&d.kind&&!d.motif?`<small>② 选一种纹样</small><div>${choice('motif:flower','花枝纹',`<svg viewBox="-175 -78 350 150" aria-hidden="true">${m3FlowerBranch()}</svg>`,d.motif==='flower')}${choice('motif:wave','水波纹','<span class="m3-motif-wave">≋</span>',d.motif==='wave')}</div>`:''}${!d.batch&&d.kind&&d.motif&&!d.color?`<small>③ 选一种配色</small><div>${choice('color:jade','浅青','<i class="m3-swatch jade"></i>',d.color==='jade')}${choice('color:ochre','暖金','<i class="m3-swatch ochre"></i>',d.color==='ochre')}</div>`:''}</div><div class="m3-design-board" data-m3-drop="design" onclick="m3Drop('design')"><div class="m3-prototype-art">${m3Product()}</div><small>${[d.kind?m3ProductName():'待选用途',d.motif?d.motif==='flower'?'花枝纹':'水波纹':'待选纹样',d.color?d.color==='jade'?'浅青':'暖金':'待选配色'].join(' · ')}</small></div>${d.kind&&d.motif&&d.color&&!d.batch?`<div class="m3-fit-actions"><label>④ 调整纹样比例 <span class="m3-scale-value">${d.scale}%</span><input type="range" min="45" max="95" value="${d.scale}" aria-label="纹样比例" oninput="m3Scale(this.value)"><small>${d.motif==='wave'?'水波纹比例不超过90%':d.kind==='clip'?'窄边发夹建议不超过65%':'卡包折边内建议不超过90%'}</small></label><div class="m3-batch-options">${m3Object('batch:small','点击制作6件','<small>小批观察反馈 · 3工时</small>')}${m3Object('batch:regular','点击制作12件','<small>增加陈列备货 · 5工时</small>')}</div></div>`:''}${d.until?`<div class="m3-batch-progress" style="--progress:${Math.max(0,(Date.now()-d.started)/(d.until-d.started))}"><span>合作制作中 <b class="m3-batch-percent">进行中</b></span><i></i><button onclick="m3Visit('map')">回地图，安排其他工作 →</button></div>`:''}${d.made?`<div class="m3-design-ready">${d.made}件已完成<button class="m3-next" onclick="m3Visit('map')">带单品回地图 · 去门店 →</button></div>`:''}`}
function m3Store(){let d=m3.design;return `<div class="m3-shop-display" data-m3-drop="shelf" onclick="m3Drop('shelf')">${m3.store.placed?`<div class="m57-display-group" aria-label="同款缂丝单品成组陈列">${[0,1,2].map(()=>m3Product()).join('')}</div>`:'橱窗 · 放入共创单品'}</div>${m3Target('label',m3.store.label?'<b>缂丝 · 通经断纬</b><small>纹样在织造中形成，师生共同开发日用单品。</small>':'橱窗说明 · 放入工艺卡','m3-shop-label')}<div class="m3-shop-objects">${d.stock?(!m3.store.placed||m3.store.label&&!m3.store.served?m3Object('product:serve',m3ProductName()+' · 余'+d.stock+'件',m3Product()):''):`<button class="m3-next" onclick="m3Visit('design')">${d.until?'共创单品正在制作':'先和师生开发单品'} →</button>`}${m3.store.placed&&!m3.store.label?m3Object('label:craft','工艺说明卡','<span class="m3-paper"></span>'):''}</div><div class="m3-shop-visitor ${m3.store.served?'is-served':''}"><small>游客 · 日常使用</small><b>${m3.store.served?'实物和工艺说明，我一起带走。':d.kind==='clip'?'想选一件能戴在头发上的缂丝小物。':'想找一件放卡片、能日常使用的缂丝小物。'}</b>${m3.store.label?m3Target('visitor:user',m3.store.served?'已回应 · 带走1件':'点击单品，递给这位游客','m3-visitor-target'):''}</div>${m3.store.served?`<div class="m3-shop-next"><button class="m3-next" onclick="m3Visit('map')">回地图 · 安排镜头与传播 →</button></div>`:''}`}
function m3Museum(){let r=m3.repair;return `${r.ready&&!r.handed?`<div class="m3-museum-transfer">${m3Object('archive:hand','作品与修复记录夹','<span class="m3-paper"></span>')}${m3Target('museum','交给策展人点收','m3-next')}</div>`:''}${r.handed?`<div class="m3-gallery-art ${m3.gallery.open?'is-open':''}">${m3Art(false,true)}</div><div class="m3-gallery-panels">${m3.gallery.panels.map((k,i)=>m3Target('panel:'+i,k?`<b>${M3_PANELS[k].name}</b><small>${M3_PANELS[k].text}</small>`:'说明位置 '+(i+1),'m3-gallery-label')).join('')}</div>${!m3.gallery.open?`<div class="m3-panel-pool">${Object.entries(M3_PANELS).filter(([k])=>!m3.gallery.panels.includes(k)).map(([k,p])=>m3Object('panel:'+k,p.name,'<span class="m3-paper"></span>')).join('')}</div>${m3.gallery.panels.every(Boolean)?'<button class="m3-gallery-open m3-next" onclick="m3OpenGallery()">说明与作品就位 · 开放展陈 →</button>':''}`:'<div class="m3-gallery-response"><small>展厅观众</small>看到了作品，也能了解修复过程和织造原理。<button class="m3-next" onclick="m3Visit(\'map\')">交展完成 · 回地图安排拍摄 →</button></div>'}`:!r.ready?`<div class="m3-scene-note">${r.until?'修复协作仍在进行，成果复核后再交展。':'策展人等待作品及修复记录。'}<button class="m3-next" onclick="m3Visit('repair')">回到研究院协作案 →</button></div>`:''}`}
function m3MediaStep(){
  const v=m3.media;
  if(v.playing)return 'playing';
  if(!v.slots.every(Boolean))return 'choose';
  if(v.previewed===v.slots.join(',')||(v.published&&!v.previewed))return 'publish';
  return 'preview';
}
function m3RecommendMedia(){
  const v=m3.media;
  if(v.playing)return;
  const available=['hands','court','product','voice','trial','codesign'].filter(shot=>!v.slots.includes(shot));
  v.slots=v.slots.map(key=>key||available.shift());
  v.focus=0;
  v.customize=false;
  m3.selected=null;
  m3Render();
}
function m3EditMedia(){
  if(m3.media.playing)return;
  m3.media.customize=true;
  m3.pane=null;
  m3.selected=null;
  m3Render();
}
function m3Media(){
  const v=m3.media,step=m3MediaStep();
  const selectedSlot=m3.selected?.startsWith('slot:')?Number(m3.selected.slice(5)):v.focus;
  const key=v.playing?v.slots[v.playIndex]:v.slots[selectedSlot]||v.slots.find(Boolean)||'hands';
  const shot=M3_SHOTS[key],publishing=step==='publish'&&!v.customize;
  const editing=!v.playing&&!publishing;
  const thumb=key=>`<img class="m3-shot-thumb" data-shot="${key}" src="${M3_SHOTS[key].image}" alt="" draggable="false">`;
  const camera=`<div class="m3-camera ${v.playing?'is-playing':''}">
    <div class="m3-camera-image m3-shot-${key}" style="--m64-shot:url('${new URL(shot.image.replace(/^\//,''),document.baseURI).href}');background-image:var(--m64-shot)">
      ${key==='hands'?'<span class="m66-original-shot" aria-hidden="true"></span>':key==='product'?'<div class="m3-camera-product">'+m3Product()+'</div>':''}</div>
    <small>${v.playing?'播放 '+(v.playIndex+1)+' / 3':'取景预览'}</small><p>${shot.caption}</p>
  </div>`;
  const editor=editing?`<div class="m62-edit-panel">
    <header class="m62-edit-header"><b>可选素材</b><small>点选或拖入镜头格</small>
      ${step==='choose'?'<button class="m58-media-primary" onclick="m3RecommendMedia()">使用推荐镜头</button>':'<button class="m58-media-primary" onclick="m3Play()">播放预览 →</button>'}</header>
    <div class="m3-shot-pool m61-shot-library" aria-label="可选素材">${Object.entries(M3_SHOTS).map(([key,info])=>
      m3Object('clip:'+key,(v.slots.includes(key)?'✓ ':'')+info.name,thumb(key),v.slots.includes(key)?'m52-choice-picked':'')).join('')}</div>
    <div class="m64-timeline-panel"><b>已选镜头</b><div class="m3-timeline" aria-label="已选镜头">${v.slots.map((key,i)=>`<div class="m3-time-slot" data-m3-drop="timeline:${i}" onclick="m3Drop('timeline:${i}')">
      <small aria-label="镜头 ${i+1}">${String(i+1).padStart(2,'0')}</small>${key?m3Object('slot:'+i,M3_SHOTS[key].name,thumb(key)):'<span>拖入画面</span>'}
      ${key?`<span class="m52-slot-controls">${i?`<button onclick="event.stopPropagation();m3Apply('slot:${i}','timeline:${i-1}')" aria-label="向前移动镜头">前移</button>`:''}${i<2?`<button onclick="event.stopPropagation();m3Apply('slot:${i}','timeline:${i+1}')" aria-label="向后移动镜头">后移</button>`:''}</span>`:''}</div>`).join('')}</div></div>
  </div>`:'';
  const publish=publishing?`<div class="m3-channels m62-publish">
    <b>③ 模拟发布</b><small>选择一种传播方式</small>
    <div class="m62-channels-row">${[['tv','专题供稿'],['short','短视频'],['note','图文笔记']].map(([key,name])=>m3Target('channel:'+key,name,'m3-channel')).join('')}</div>
    <button class="m62-edit-back" onclick="m3EditMedia()">返回编辑镜头</button>
  </div>`:'';
  return `<div class="m62-media ${editing?'is-editing':'is-reviewing'}">${camera}${editor}${publish}${v.playing?'<p class="m62-play-status" role="status">② 正在播放预览</p>':''}</div>`;
}
function m3Overlay(){let p=m3.pane;if(p==='journal')return `<aside class="m3-overlay m3-journal"><button class="m3-close" onclick="m3.pane=null;m3Render()">×</button><h2>我的工作手记</h2><p>物件可拖拽，也可点选后点目标。修复协作与单品制作进行时，可以去处理别的事。</p><div class="m3-journal-list">${m3.journal.map(x=>`<p><small>累计 ${x.hours} 工时</small>${x.text}</p>`).join('')||'<p>先去工作室看看游客的需求，也可直接接洽修复委托或共创邀请。</p>'}</div><small>订单、作品、展陈与传播均为文化科普情境；不执行真实采购或平台发布。</small></aside>`;
if(/^detail[01]$/.test(p||'')){
  const i=+p.slice(-1), recorded=m3.repair.marks.includes(i);
  return `<aside class="m3-overlay m3-detail"><button class="m3-close" onclick="m3DetailNext52()" aria-label="返回现状照片">×</button>
    <div class="m3-loupe-view m3-detail-${i}">${m3Art(true)}</div>
    <p>${i===0?'纹样边缘局部缺失。':'下缘纬线松浮。'}${recorded?' 已记录。':''}</p>
    ${recorded?`<button class="m3-next" onclick="m3DetailNext52()">${m3NextMark()===-1?'返回照片对照纹样':'继续查看下一处'}</button>`:
    `<button class="m3-next" onclick="m3RecordMark56(${i})">记录此处</button>`}</aside>`;
}
if(p==='demo'){const step=m3.demo52||0;return `<aside class="m3-overlay m3-demo m52-demo"><button class="m3-close" onclick="m3.pane=null;m3Render()" aria-label="收起讲解">×</button><h2>花纹，是织进去的</h2><div class="m52-demo-grid"><div>${m3Sample52()}<small>牡丹教学样片</small></div><div>${m3Weave52(step)}</div></div><p>${step===0?'先认一认：纵向的是经线，横向织入的是纬线。每经过一根经线，上下关系交替一次。':step===1?'“通经”的“通”：经线沿织物纵向连续贯通，并不是织到一个色块就剪断。':'“回纬”：纬线绕过边缘经线折回，去程与回程的一上一下关系交换；只在本色纹样区域往返，逐行向上织入。'}</p><div class="m52-demo-controls"><button onclick="m3DemoStep52(1)">① 看经线贯通</button><button onclick="m3DemoStep52(2)">② 看彩纬往返</button></div><button class="m3-next" onclick="m3DemoComplete53()">讲解完成 · 回到案前 →</button></aside>`}

if(p==='feedback')return `<aside class="m3-overlay m3-feedback"><button class="m3-close" onclick="m3.pane=null;m3Render()">×</button><small>模拟传播后 · 观众回话</small><h2>镜头外，也有新的需求</h2>${m3.media.feedback.map(t=>'<p>'+t+'</p>').join('')}<button onclick="m3EditMedia()">调整镜头，再讲一次</button><button class="m3-next" onclick="m3Visit('map')">带着反馈回工作室 →</button></aside>`;
if(p==='reset')return `<aside class="m3-overlay m3-reset"><h2>重新安排第三关？</h2><p>仅重置当代工作室的本轮行程。</p><button onclick="m3=m3Fresh();m3Save();m3Render()">重新开始</button><button onclick="m3.pane=null;m3Render()">保留安排</button></aside>`;return ''}
function m3End(){return `<article class="m3-result"><small>当代工作室 · 本轮成果</small><h2>从一张案，连接更多人</h2><div class="m3-result-values"><b>1项<small>修复成果交展</small></b><b>${m3.design.made}件<small>${m3ProductName()}共创</small></b><b>2次<small>回应游客需求</small></b></div><p>${m3.repair.approach==='consult'?'补充会商让资料与修复方案衔接得更充分。':'既有档案支撑了修复方案的核对。'}${m3.design.batch==='small'?'选择小批制作，留出继续调整的余地。':'备足陈列批次，让更多单品进入日常使用。'}</p><p>${(m3.media.teaches??m3.media.slots.includes('hands'))?'制作近景让观众看到了缂丝织造。':'观众仍想知道缂丝怎样织成，下一段讲述可以加入原理。'}展厅中的作品信息、修复过程与工艺说明，延续了面对面的讲解。</p><div class="m3-result-actions"><button onclick="m3.pane='reset';m3Render()">换一种安排重玩</button><button onclick="switchCh(0)">回到第一关</button></div></article>`}
function m3Render(){if(s.ch!==2)return;let root=document.getElementById('modernApp');if(!root){root=document.createElement('section');root.id='modernApp';document.body.append(root)}let bg=m3.scene==='studio'?'studio-visitors54':m3.scene==='media'?'studio-filming60':m3.scene==='end'?'studio':m3.scene;root.innerHTML=`<div class="m3-world m3-${m3.scene}" style="--m3-bg:url('${new URL('modern-era/'+bg+'.lite.webp',document.baseURI).href}')">${m3Header()}<main class="m3-scene">${({map:m3Map,studio:m3Studio,repair:m3Repair,design:m3Design,store:m3Store,museum:m3Museum,media:m3Media,end:m3End})[m3.scene]()}</main><div class="m3-process">${[['studio','接待'],['repair','修复协作'],['design','高校共创'],['store','门店'],['museum','交展'],['map','传播']].map(([k,t])=>`<button class="${m3.scene===k?'is-current':''}" onclick="m3Visit('${k}')">${t}</button>`).join('<i>·</i>')}</div>${m3Complete()&&!m3.finished?'<button class="m3-finish m3-next" onclick="m3Finish()">完成本轮工作 →</button>':''}${m3.menu?'<nav class="m3-menu"><button onclick="switchCh(0)">返回第一关</button><button onclick="switchCh(1)">返回第二关</button><button onclick="m3.pane=\'reset\';m3.menu=false;m3Render()">重玩第三关</button><button onclick="m3.menu=false;m3Render()">收起</button></nav>':''}${m3Overlay()}</div>`;m3Save()}
let m3Drag=null,m3Suppress=0,m3HeldPointer=null;
document.addEventListener('pointerdown',e=>{
  if(s.ch===2&&e.target.closest('.m3-world')&&e.target.closest('button,input,[data-m3-drop]')){
    m3HeldPointer=e.pointerId;
  }
},true);
function m3ReleasePointer(e){
  if(e.pointerId===m3HeldPointer)m3HeldPointer=null;
}
document.addEventListener('pointerup',m3ReleasePointer,true);
document.addEventListener('pointercancel',m3ReleasePointer,true);
globalThis.addEventListener?.('blur',()=>{m3HeldPointer=null});
document.addEventListener('pointerdown',e=>{if(s.ch!==2)return;let node=e.target.closest('[data-m3-drag]');if(!node)return;m3Drag={node,action:node.dataset.m3Drag,x:e.clientX,y:e.clientY,moved:false,ghost:null};node.setPointerCapture?.(e.pointerId)},true);
document.addEventListener('pointermove',e=>{if(!m3Drag||s.ch!==2)return;let p=m3Drag;if(!p.moved&&Math.hypot(e.clientX-p.x,e.clientY-p.y)>6){p.moved=true;if(p.action==='tool:loupe')p.node.classList.add('m56-dragging');p.ghost=p.node.cloneNode(true);p.ghost.className='m3-drag-ghost';p.ghost.removeAttribute('onclick');document.body.append(p.ghost);document.querySelector('.m52-guide')?.classList.remove('m52-guide');const world=document.querySelector('.m3-world');if(world)kesiGuideChoices(world,[...world.querySelectorAll(m3GuideDropTarget(p.action))])}if(p.moved){p.ghost.style.left=e.clientX+'px';p.ghost.style.top=e.clientY+'px';e.preventDefault()}},true);
document.addEventListener('pointerup',e=>{if(!m3Drag)return;let p=m3Drag;m3Drag=null;p.node.classList.remove('m56-dragging');p.ghost?.remove();document.querySelectorAll('.m3-drop-ready').forEach(n=>n.classList.remove('m3-drop-ready'));if(!p.moved)return;m3Suppress=Date.now()+250;let hit=[...document.querySelectorAll(m3DragTargets52(p.action))].find(n=>{let r=n.getBoundingClientRect();return e.clientX>=r.left-12&&e.clientX<=r.right+12&&e.clientY>=r.top-12&&e.clientY<=r.bottom+12});if(hit){if(!m3Apply(p.action,hit.dataset.m3Drop))m3Guide52()}else{m3Guide52();m3Toast(p.action==='tool:loupe'?'把放大镜拖到当前标出的瑕疵处。':'请放到框亮的位置；也可直接点击物件完成这一步。')}},true);
document.addEventListener('pointercancel',()=>{m3Drag?.node.classList.remove('m56-dragging');m3Drag?.ghost?.remove();m3Drag=null;document.querySelectorAll('.m3-drop-ready').forEach(n=>n.classList.remove('m3-drop-ready'));if(s.ch===2)m3Guide52()},true);
document.addEventListener('keydown',e=>{if(s.ch===2&&e.target.matches('input,textarea'))e.stopPropagation()},true);
const m3PreviousRender=render;render=function(){if(s.ch!==2){document.body.classList.remove('modern-mode');document.getElementById('modernApp')?.remove();return m3PreviousRender()}document.body.classList.remove('qing','easy-mode','export-mode');document.getElementById('exportApp')?.remove();document.body.classList.add('modern-mode');document.getElementById('intro').close();document.getElementById('ending').close();m3Render()};
const m3PreviousGo=go;go=function(i){if(s.ch===2){m3Visit(['studio','repair','design','store','map'][i]);return}return m3PreviousGo(i)};
render();

function m3Sample52(){return '<img class="m52-sample-photo" src="modern-era/peony-teaching52.lite.webp" alt="牡丹缂丝教学样片" draggable="false">'}
function m3NextMark(){return [0,1].find(i=>!m3.repair.marks.includes(i))??-1}
function m3InspectMark(i){
  if(m3.scene!=='repair'||m3.pane||m3.brief.length!==3||m3.repair.ready||i<0||i!==m3NextMark())return false;
  m3.pane='detail'+i;
  m3.selected=null;
  m3Save();
  m3Render();
  return true;
}
function m3RecordMark56(i){
  if(m3.pane!=='detail'+i||i!==m3NextMark()||i<0)return;
  m3.repair.marks.push(i);
  m3Log('mark-'+i,i===0?'记录纹样边缘局部缺失，保留照片坐标。':'记录下缘松浮区域，将病害位置与现状照片对应。');
  m3Render();
}
function m3DetailNext52(){m3.pane=null;m3Render()}
function m3DemoStep52(step){m3.demo52=Math.max(0,Math.min(2,step));m3Render()}
function m3Weave52(step) {
  const warpXs = Array.from({length:25}, (_,i) => 94 + i*18);
  const rowYs = Array.from({length:11}, (_,i) => 280 - i*14);
  const palettes = {
    warp: ['#807461','#c6b99f','#eee2c7'],
    gold: ['#8b5e2e','#c39b50','#eed491'],
    red: ['#742d29','#ae5046','#de8b78']
  };
  function thread(d, color, width, attrs = '') {
    const [edge, body, light] = palettes[color];
    return `<g fill="none" stroke-linecap="round" stroke-linejoin="round" ${attrs}>
      <path d="${d}" stroke="${edge}" stroke-width="${width}"/>
      <path d="${d}" stroke="${body}" stroke-width="${width*.77}"/>
      <path d="${d}" transform="translate(-.65 -.75)" stroke="${light}" stroke-width="${width*.24}"/>
    </g>`;
  }
  function returningPath(left,right) {
    let d = `M${left} ${rowYs[0]}`;
    rowYs.forEach((y,row) => {
      const edge = row%2 ? left : right;
      d += 'H'+edge;
      if (row+1 < rowYs.length) {
        const turn = edge + (row%2 ? -14 : 14);
        d += `C${turn} ${y} ${turn} ${rowYs[row+1]} ${edge} ${rowYs[row+1]}`;
      }
    });
    return d;
  }
  const warpOnly = step===1;
  const warp = warpXs.map(x => thread(`M${x} 38V320`,'warp',5.5)).join('');
  const fields = [[94,220,'gold'],[238,382,'red'],[400,526,'gold']];
  const animated = step===2;
  const duration = '8s';
  const masks = [];
  const shuttles = [];
  const wefts = warpOnly?'':fields.map(([left,right,color], index) => {
    const path = returningPath(left,right);
    const id = 'm55-weft-'+index;
    const gaps = rowYs.flatMap((y,row) => warpXs.map((x,column) =>
      x>=left&&x<=right&&(row+column)%2===0
        ? `<rect x="${x-2.72}" y="${y-4.5}" width="5.44" height="9"/>` : '')).join('');
    masks.push(`<mask id="${id}-crossings" maskUnits="userSpaceOnUse" x="0" y="0" width="840" height="380">
      <rect width="840" height="380" fill="white"/><g fill="black">${gaps}</g></mask>`);
    if(animated){
      masks.push(`<mask id="${id}-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="840" height="380">
        <path d="${path}" pathLength="1" fill="none" stroke="white" stroke-width="8"
          stroke-dasharray="1 1" stroke-dashoffset="1">
          <animate attributeName="stroke-dashoffset" from="1" to="0" dur="${duration}" fill="freeze"/>
        </path></mask>`);
      shuttles.push(`<g class="m55-shuttle" visibility="hidden">
        <set attributeName="visibility" to="visible" begin="0s" dur="${duration}"/>
        <animateMotion path="${path}" dur="${duration}" calcMode="paced" rotate="auto"/>
        <path d="M-13 0Q-7 -6 0 -4.8Q7 -6 13 0Q7 6 0 4.8Q-7 6 -13 0Z"
          fill="#916740" stroke="#523a27" stroke-width="1"/>
        <path d="M-7 0Q0 -3.5 7 0Q0 3.5 -7 0Z" fill="${palettes[color][2]}" stroke="#604731" stroke-width=".65"/>
      </g>`);
    }
    return `<g ${animated?`class="m55-weft-reveal" mask="url(#${id}-reveal)"`:''}>
      <g mask="url(#${id}-crossings)">${thread(path,color,6.7)}</g></g>`;
  }).join('');
  return `<svg class="m52-weave-diagram m53-weave-diagram m52-step-${step}" viewBox="0 0 840 380" role="img"
    aria-label="${warpOnly?'只有纵向贯通的经线':'经线与纬线交替穿插，两侧金色纬线和中央红色纬线各在本色区域折返'}">
    <defs>${masks.join('')}
      <mask id="m55-inset-crossings" maskUnits="userSpaceOnUse" x="0" y="0" width="840" height="380">
        <rect width="840" height="380" fill="white"/>
        <path d="M710 158h10v16h-10ZM635 224h10v16h-10Z" fill="black"/>
      </mask>
    </defs>
    <rect x="76" y="32" width="474" height="294" rx="5" fill="#e8dfc9" stroke="#ad9d7b"/>
    <g class="m52-warp">${warp}</g>
    ${wefts}${shuttles.join('')}
    <g font-family="serif" fill="#4c625c">
      <text x="82" y="21" font-size="15">经线 · 纵向贯通</text>
      <text x="82" y="373" font-size="12">结构放大示意 · 非实际比例</text>
      ${warpOnly?'':`<text x="142" y="350" font-size="16">金色与红色纬线 · 各在本色区域折返</text>
        <rect x="572" y="88" width="235" height="228" rx="6" fill="#f4eedc" stroke="#ab9b7e"/>
        <text x="587" y="111" font-size="16">边缘折返 · 放大</text>
        ${thread('M640 130V270M715 130V270','warp',10)}
        <g mask="url(#m55-inset-crossings)">${thread('M592 166H715C762 166 762 232 715 232H592','red',11)}</g>
        <text x="583" y="291" font-size="13">去程、回程的上下关系交换</text>
        <text x="585" y="337" font-size="14">绕过边缘经线，折回织入</text>
        <text x="669" y="78" font-size="14">边缘经线</text>`}
    </g></svg>`;
}
function m3DemoComplete53(){if(m3.pane!=='demo'||m3.demo52!==2)return;if(!m3.learner){m3.learner=true;m3.hours++;m3Log('learner','用教学样片回应游客：经线贯通，彩色纬线分区织入，纹样在织造中形成。')}m3.demo53Completed=true;m3.pane=null;m3Save();m3Render()}
function m3SampleProjection53(points){const source=[[0,0],[1000,0],[1000,1067],[0,1067]],a=[];source.forEach(([x,y],i)=>{const[u,v]=points[i];a.push([x,y,1,0,0,0,-u*x,-u*y,u],[0,0,0,x,y,1,-v*x,-v*y,v])});for(let c=0;c<8;c++){let p=c;for(let r=c+1;r<8;r++)if(Math.abs(a[r][c])>Math.abs(a[p][c]))p=r;[a[c],a[p]]=[a[p],a[c]];const d=a[c][c];for(let k=c;k<9;k++)a[c][k]/=d;for(let r=0;r<8;r++)if(r!==c){const f=a[r][c];for(let k=c;k<9;k++)a[r][k]-=f*a[c][k]}}return [...a.map(r=>r[8]),1]}
function m3ProjectSample53(){const el=document.querySelector('.m53-flat-sample');if(!el)return;const r=el.closest('.m3-world').getBoundingClientRect();if(!r.width||!r.height)return;const points=[[.421,.638],[.569,.638],[.603,.824],[.39,.824]].map(([x,y])=>[x*r.width,y*r.height]),h=m3SampleProjection53(points);el.style.transform=`matrix3d(${h[0]},${h[3]},0,${h[6]},${h[1]},${h[4]},0,${h[7]},0,0,1,0,${h[2]},${h[5]},0,1)`}
globalThis.addEventListener?.('resize',m3ProjectSample53);

function m3Hint52(){const r=m3.repair,d=m3.design;switch(m3.scene){case'map':return '';case'studio':return '';case'repair':return m3.brief.length<3?'① 点击下方三份资料，逐份核对入夹。':r.marks.length<2?'':!r.aligned?'③ 将下方纹样对照图拖到现状照片上，也可点击对照图。':!r.approach?'④ 选择一种核对方案，点击即可交接开展协作。':r.until?'修复协作与复核进行中；可回地图先处理共创和接待。':r.handed?'成果已交展，回地图继续其他工作。':'⑤ 已完成复核，带作品与记录回地图，前往展厅。';case'design':return !d.kind?'① 从下方选卡包或发夹。点击即放到设计案，也可拖入。':!d.motif?'② 选择一种纹样，中央样品会随之变化。':!d.color?'③ 选择配色。':!d.kind&&d.motif&&d.color&&!d.batch?'④ 调整下方比例，再点击“交给师生试用”；也可拖给师生。':!d.batch?(d.scale>m3FitLimit(d)?'纹样比例超限，请调至'+m3FitLimit(d)+'%以内。':'⑤ 试合通过，点击下方6件或12件，开始制作。'):d.until?'制作正在进行，可回地图处理其他任务。':'⑥ 单品已完成，回地图前往门店。';case'store':return !d.stock&&!d.made?'先回地图，到高校共创制作单品。':!m3.store.placed?'① 点击下方单品，放入橱窗；也可拖入橱窗。':!m3.store.label?'② 点击工艺说明卡，让说明与实物一起陈列。':!m3.store.served?'③ 再点击单品，交给右侧游客试用，也可拖给游客。':'';case'museum':return !r.ready?'修复完成并复核后，再带作品与档案来交展。':!r.handed?'① 点击作品与记录夹，或将它拖给策展人。':!m3.gallery.panels.every(Boolean)?'② 依次点击下方三张说明，自动放入空位；也可自行拖放顺序。':!m3.gallery.open?'③ 说明已就位，点击“开放展陈”。':'交展完成，回地图安排镜头与传播。';case'media':return '';default:return ''}}
function m3Guide52(){
  const root=document.querySelector('.m3-world');
  if(!root)return;
  let target;
  if(m3.pane==='demo'){
    target=m3.demo52===2?'.m3-overlay .m3-next':`.m52-demo-controls button:nth-child(${m3.demo52===1?2:1})`;
  }else if(m3.pane){
    target='.m3-overlay .m3-next';
  }else if(m3.selected){
    target=m3GuideDropTarget(m3.selected);
  }else{
    const r=m3.repair,d=m3.design;
    switch(m3.scene){
      case 'map':target=m3Complete()?'.m3-finish':'.m52-map-current';break;
      case 'studio':target=m3LectureDone()?'.m52-scene-next':'.m3-studio-sample button';break;
      case 'repair':target=m3.brief.length<3?'.m3-repair-docs button':r.marks.length<2?'.m3-loupe':!r.aligned?'.m3-trace-sheet':!r.approach?'.m3-repair-plans button':r.until?'.m3-restoration-preview button':'.m3-repair-next';break;
      case 'design':target=!d.kind?'[data-m3-drag^="form:"]':!d.motif?'[data-m3-drag^="motif:"]':!d.color?'[data-m3-drag^="color:"]':!d.batch?(d.scale>m3FitLimit(d)?'.m3-fit-actions input':'.m3-batch-options button'):d.until?'.m3-batch-progress button':'.m3-design-ready button';break;
      case 'store':target=!m3.store.placed?'[data-m3-drag^="product:"],.m3-shop-objects button':!m3.store.label?'[data-m3-drag^="label:"]':!m3.store.served?'[data-m3-drag^="product:"]':'.m3-shop-next button';break;
      case 'museum':target=!r.ready?'.m3-scene-note button':!r.handed?'.m3-museum-transfer button':!m3.gallery.panels.every(Boolean)?'.m3-panel-pool button':!m3.gallery.open?'.m3-gallery-open':'.m3-gallery-response button';break;
      case 'media':{
        const step=m3MediaStep();
        target=m3Complete()&&!m3.media.customize?'.m3-finish':step==='publish'&&!m3.media.customize?'.m3-channel':step==='choose'?'.m61-shot-library button:not(.m52-choice-picked),.m58-media-primary':'.m58-media-primary';
        break;
      }
    }
  }
  if(!target){root.querySelector('.kesi-guide-group')?.remove();return}
  const options=['.m3-repair-docs button','.m3-repair-plans button','[data-m3-drag^="form:"]','[data-m3-drag^="motif:"]','[data-m3-drag^="color:"]','.m3-batch-options button','.m3-panel-pool button','.m3-channel','.m61-shot-library button:not(.m52-choice-picked),.m58-media-primary'];
  const nodes=[...root.querySelectorAll(target)].filter(node=>!node.disabled&&!node.hidden);
  kesiGuideChoices(root,options.includes(target)?nodes:nodes.slice(0,1));
}

function m3GuideDropTarget(action){
  const kind=action.split(':')[0];
  if(kind==='product')return m3.store.placed?'[data-m3-drop="visitor:user"]':'[data-m3-drop="shelf"]';
  const slot=kind==='clip'?m3.media.slots.indexOf(null):kind==='panel'?m3.gallery.panels.indexOf(null):-1;
  if(slot>=0)return `[data-m3-drop="${kind==='clip'?'timeline':'panel'}:${slot}"]`;
  return m3DragTargets52(action);
}
function m3DragTargets52(action){const k=action.split(':')[0],zones={doc:['dossier'],tool:['mark:'],trace:['reference'],plan:['repair-plan'],archive:['museum'],form:['design'],motif:['design'],color:['design'],batch:['batch'],sample:['visitor:learner'],product:['shelf','visitor:user'],label:['label'],clip:['timeline:'],slot:['timeline:'],panel:['panel:'],edit:['channel:']};return (zones[k]||[]).map(z=>'[data-m3-drop^="'+z+'"]' ).join(',')||'.m52-no-target'}
const m3RenderBefore52=m3Render;m3Render=function(){m3RenderBefore52();if(s.ch!==2)return;const root=document.querySelector('.m3-world');if(!root)return;const hint=m3Hint52();if(hint){root.insertAdjacentHTML('beforeend','<div class="m52-action-hint" role="status">'+hint+'</div>')}m3UpdateFit();m3Guide52();m3ProjectSample53()};
if(s.ch===2)m3Render();
