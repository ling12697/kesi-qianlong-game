/* 第一关：信息与操作统一放入画卷，默认收起工作台。 */
let mapPanelOpen=false;
const paintedRender=qrender;
qrender=function(){paintedRender();if(s.ch!==0)return;const stage=document.querySelector('#qingApp .qscene');const top=document.querySelector('#qingApp .qtop');const below=document.querySelector('#qingApp .qbelow');if(!stage||!top||!below)return;
stage.append(top,below);stage.classList.toggle('work-open',mapPanelOpen);
const side=below.querySelector('.qside');if(side)side.remove();
const title=top.querySelector('div');title.innerHTML='<div class="map-title">缂丝经纬<span>差货入京</span></div>';
const stats=top.querySelector('.qstats');stats.innerHTML=`<span>第 <b>${q.day}</b> 日</span><span>钱 ${q.coins}</span><span>丝料 ${q.stock}</span><span>下机 ${qdone()}/10</span>`;
const controls=top.lastElementChild;controls.innerHTML=btn('下一日',"qadvance()",q.delivered)+btn('全屏',"full()");
const sceneLabel=stage.querySelector('.qscenelabel');sceneLabel?.remove();
const work=below.querySelector('.qboard');work.insertAdjacentHTML('afterbegin','<button class="map-close" aria-label="收起操作" onclick="mapPanelOpen=false;qrender()">×</button>');
const tabs=work.querySelector('.qtabs');tabs.remove();
const tool=document.createElement('div');tool.className='map-tools';tool.innerHTML=['差单','分工发料','收验交付','日程'].map((t,i)=>`<button class="${mapPanelOpen&&q.tab===i?'active':''}" onclick="qmapOpen(${i})">${t}</button>`).join('')+btn('⋯',"qmapMenu()");stage.append(tool);
const bubble=document.createElement('div');bubble.className='map-bubble';const hints=['第16日开船，请先接下差单。','点花稿核对难处，也可先核对画稿。','把任务与丝料放入织户的篮子。','丝料到位，按约定日期开工。','难纹可通过巡查指导改善。','成品收齐后，逐件展开查验。'];bubble.innerHTML='<span>'+(q.accepted?(q.log[0]||hints[q.loc]).replace(/^第\d+日 · /,''):hints[0])+'</span>';stage.append(bubble);
qsave();};
const oldNav=qnav;qnav=function(i){mapPanelOpen=true;oldNav(i)};
const oldQwork=qwork;qwork=function(){oldQwork();if(s.ch!==0)return;const work=$('qwork');work.querySelectorAll('.qsubtitle p').forEach(e=>e.remove());if(q.tab===0){work.querySelectorAll('.qmuted').forEach(e=>e.remove());const p=work.querySelector('.qpattern>div>p');if(p)p.textContent='十份纹样，十包基本用料。第16日前交至差船。';}if(q.tab===2||q.tab===3){work.querySelectorAll('.qmuted').forEach(e=>e.remove())}};
function qmapOpen(tab){q.tab=tab;mapPanelOpen=true;qrender()}
function qmapMenu(){qmodal('行囊',`<div class="qactions">${btn('行事簿',"qjournal()")}${btn('重玩本关',"qclose();qreset()")}${btn('第二关',"qclose();switchCh(1)")}${btn('第三关',"qclose();switchCh(2)")}${btn('返回画卷',"qclose()")}</div><p class="qmuted">地图参考《姑苏繁华图》重绘。情境、任务与四季时间为游戏化设计。</p>`)}
render();
