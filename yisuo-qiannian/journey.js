(()=>{'use strict';
const levels=[{name:'第一关 · 苏州缂织',url:'level-1/index.html?v=perf5',end:'#finish[open]'},{name:'第二关 · 朕览经纬',url:'level-2/index.html?v=perf5',end:'.story-end'},{name:'第三关 · 承业之路',url:'level-3/index.html?v=perf5',end:null}];
const frame=document.querySelector('#game'),next=document.querySelector('#next'),key='kesi-complete-current-level-v1';let current=0,observer;
try{const saved=Number(localStorage.getItem(key));if(Number.isInteger(saved)&&saved>=0&&saved<3)current=saved}catch{}
const requested=new URL(location.href).searchParams.get('level');if(['1','2','3'].includes(requested))current=Number(requested)-1;
function fitPlayer(){const panel=document.querySelector('main');const framed=current===2&&window.innerWidth<1000;document.body.classList.toggle('framed-level',framed);if(framed)document.body.style.setProperty('--player-scale',String(Math.min(panel.clientWidth/1280,panel.clientHeight/720)));}
window.addEventListener('resize',fitPlayer);if(typeof ResizeObserver!=='undefined')new ResizeObserver(fitPlayer).observe(document.querySelector('main'));
function load(i){document.body.classList.remove('on-cover');document.querySelector('#cover').hidden=true;if(observer)observer.disconnect();current=i;fitPlayer();try{localStorage.setItem(key,String(i))}catch{}document.querySelectorAll('[data-level]').forEach(b=>{if(Number(b.dataset.level)===i)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});frame.title=levels[i].name;next.textContent=i<2?'进入第'+['一','二','三'][i+1]+'关 →':'三关收卷';document.querySelector('#game-loading').hidden=false;frame.src=levels[i].url;document.title=levels[i].name+' · 一梭千年'}
window.addEventListener('message',e=>{if(e.source===frame.contentWindow&&e.origin===location.origin&&e.data?.type==='kesi-ready')document.querySelector('#game-loading').hidden=true});
function advance(){if(current<2)load(current+1);else document.querySelector('#complete').showModal()}
document.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>load(Number(b.dataset.level))));next.addEventListener('click',advance);
document.querySelector('#stay').onclick=()=>document.querySelector('#complete').close();document.querySelector('#restart').onclick=()=>{document.querySelector('#complete').close();load(0)};
frame.addEventListener('load',()=>{document.querySelector('#game-loading').hidden=true;if(observer)observer.disconnect();let doc;try{doc=frame.contentDocument;if(!doc||!doc.body)return}catch{return}const i=current;if(!levels[i].end)return;
function attach(){const target=doc.querySelector(levels[i].end);if(!target||target.querySelector('[data-journey-next]'))return;const button=doc.createElement('button');button.dataset.journeyNext='true';button.className='primary guided';button.textContent='进入第'+['一','二','三'][i+1]+'关 →';button.style.cssText='margin:12px 8px;padding:12px 20px;cursor:pointer';button.addEventListener('click',advance);target.append(button)}
observer=new MutationObserver(attach);observer.observe(doc.body,{childList:true,subtree:true,attributes:true,attributeFilter:['open']});attach()});
let selected=current;
const choices=[...document.querySelectorAll('[data-choice]')];
function select(i){selected=i;choices.forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.choice)===i)))}
choices.forEach(b=>b.addEventListener('click',()=>{select(Number(b.dataset.choice));load(selected);document.querySelector('#home').focus()}));
document.querySelector('#start-game').addEventListener('click',()=>{load(selected);document.querySelector('#home').focus()});
document.querySelector('#home').addEventListener('click',e=>{e.preventDefault();select(current);document.querySelector('#cover').hidden=false;document.body.classList.add('on-cover');document.title='一梭千年';choices[selected].focus()});
select(selected);

})();