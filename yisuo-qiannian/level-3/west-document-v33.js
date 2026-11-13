/* Only the signed West Hall commission and its stow gesture are changed. */
function v33CommissionPaper(id='desk',inside=false){
 const art=`<defs><linearGradient id="v33-paper-${id}" x2=".15" y2="1"><stop stop-color="#f3eddd"/><stop offset=".52" stop-color="#eae3cf"/><stop offset="1" stop-color="#ded5bf"/></linearGradient><linearGradient id="v33-fold-${id}"><stop stop-color="#a89d83" stop-opacity=".03"/><stop offset=".48" stop-color="#93866c" stop-opacity=".16"/><stop offset=".53" stop-color="#fffdf1" stop-opacity=".5"/><stop offset="1" stop-color="#b9ab8b" stop-opacity="0"/></linearGradient></defs><path d="M5 5Q76 2 150 5L294 4 296 175Q219 178 150 175L4 177Z" fill="url(#v33-paper-${id})" stroke="#aaa087" stroke-width=".75"/><path d="M8 8L291 7M7 174L292 172" fill="none" stroke="#fff9e8" stroke-width=".8" opacity=".65"/><g stroke="#9c8d70" stroke-width=".35" opacity=".2"><path d="M19 16h74m55 0h101M14 158h38m121 9h87M23 31l21-.3m197 112h34M68 163l42-.3"/></g><rect x="94" y="5" width="12" height="170" fill="url(#v33-fold-${id})"/><rect x="195" y="5" width="11" height="170" fill="url(#v33-fold-${id})"/><path d="M100 9v162M200 8v162" stroke="#b2a58a" stroke-width=".45" opacity=".45"/><g fill="none" stroke="#b18d77" stroke-width=".55" opacity=".48"><path d="M22 22h255v130H22Z"/><path d="M219 23v128M166 23v128M113 23v128M60 23v128"/></g><g font-family="STKaiti,KaiTi,'Noto Serif CJK SC',serif" fill="#605b4b" text-anchor="middle"><text x="248" y="43" font-size="20" letter-spacing="2"><tspan x="248">西</tspan><tspan x="248" dy="23">庫</tspan><tspan x="248" dy="23">堂</tspan><tspan x="248" dy="23">差</tspan><tspan x="248" dy="23">單</tspan></text><g font-size="11.5" letter-spacing="2"><text x="193" y="47"><tspan x="193">按</tspan><tspan x="193" dy="17">樣</tspan><tspan x="193" dy="17">承</tspan><tspan x="193" dy="17">造</tspan></text><text x="140" y="47"><tspan x="140">本</tspan><tspan x="140" dy="17">局</tspan><tspan x="140" dy="17">三</tspan><tspan x="140" dy="17">件</tspan></text><text x="87" y="39"><tspan x="87">九</tspan><tspan x="87" dy="17">十</tspan><tspan x="87" dy="17">日</tspan><tspan x="87" dy="17">交</tspan><tspan x="87" dy="17">期</tspan></text></g><text x="149" y="161" font-size="9.5" letter-spacing="3" fill="#77705c">承造人已簽收</text></g><g transform="translate(30 91) rotate(-4 15 17)" fill="none" stroke="#9b6454" opacity=".76"><path d="M1 1h29v33H1Z" stroke-width="1.1"/><path d="M4 4h23v27H4Z" stroke-width=".55"/><path d="M9 8v8h14M8 12h16M16 6v13M8 24h15M12 20v10M20 20v9" stroke-width="1.2"/></g>`;
 return `<svg class="v33-commission-paper" viewBox="${inside?'0 0 1000 1000':'0 0 300 180'}" preserveAspectRatio="none" aria-hidden="true"><g class="v33-paper-plane"${inside?' style="transform:matrix(1.166667,-.2,.722222,.666667,320,590);transform-origin:0 0"':''}>${art}</g></svg>`;
}
const v33Opening=[[.22,.56],[.72,.48],[.91,.63],[.29,.77]];
function v33InOpening(x,y){let hit=false;for(let i=0,j=v33Opening.length-1;i<v33Opening.length;j=i++){const a=v33Opening[i],b=v33Opening[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;}
let v33DropPoint=null,v33StowBusy=false,v33StowTimer=0;
window.addEventListener('pointerup',e=>{v33DropPoint=westPointer?.type==='stow'&&westPointer.moved?{x:e.clientX,y:e.clientY}:null;},true);
document.addEventListener('pointermove',()=>{if(westPointer?.type!=='stow'||!westPointer.ghost)return;const ghost=westPointer.ghost,r=westPointer.el.getBoundingClientRect();ghost.classList.add('v33-paper-ghost');ghost.style.width=r.width+'px';ghost.style.height=r.height+'px';},true);
const v33StowBefore=westStow;
westStow=function(){
 const state=westState();if(s.ch!==0||easy.step!==0||state.westStage!=='signed'||!state.signed||v33StowBusy)return;
 const bag=document.querySelector('.west-document-bag'),paper=document.querySelector('.west-folded-order'),interior=bag?.querySelector('.v33-case-interior'),plane=interior?.querySelector('.v33-paper-plane');
 const drop=v33DropPoint;v33DropPoint=null;
 if(!bag||!paper||!interior||!plane){v33StowBefore();return;}
 const r=interior.getBoundingClientRect(),pr=paper.getBoundingClientRect();
 if(!r.width||!r.height){v33StowBefore();return;}
 if(drop&&!v33InOpening((drop.x-r.left)/r.width,(drop.y-r.top)/r.height))return;
 v33StowBusy=true;bag.classList.add('v33-receiving');bag.setAttribute('aria-busy','true');paper.style.visibility='hidden';interior.hidden=false;
 const center=drop||{x:pr.left+pr.width/2,y:pr.top+pr.height/2};
 const a=pr.width/r.width*1000/300,d=pr.height/r.height*1000/180,tx=(center.x-r.left)/r.width*1000-a*150,ty=(center.y-r.top)/r.height*1000-d*90;
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 if(!reduced&&plane.animate)plane.animate([{transform:`matrix(${a},0,0,${d},${tx},${ty})`},{transform:'matrix(1.166667,-.2,.722222,.666667,320,590)'}],{duration:620,easing:'cubic-bezier(.22,.65,.3,1)',fill:'none'});
 v33StowTimer=setTimeout(()=>{v33StowBusy=false;v33StowTimer=0;bag.removeAttribute('aria-busy');if(s.ch===0&&easy.step===0&&westState()===state&&state.westStage==='signed')v33StowBefore();},reduced?120:1050);
};
const v33RenderBefore=easyRender;
easyRender=function(){
 v33RenderBefore();if(s.ch!==0||easy.step!==0||westState().westStage!=='signed')return;
 const entry=document.querySelector('.west-entry');if(!entry)return;entry.classList.add('v33-document-scene');
 const paper=entry.querySelector('.west-folded-order');if(paper){paper.innerHTML=v33CommissionPaper('desk');paper.setAttribute('aria-label','已签收的西库堂差单，拖入文书匣内，也可点按收妥');}
 const bag=entry.querySelector('.west-document-bag');if(bag&&!bag.querySelector('.v33-case-interior')){bag.insertAdjacentHTML('beforeend',`<span class="v33-case-interior" hidden>${v33CommissionPaper('inside',true)}</span><span class="craft-chest v33-case-front" data-frame="0" aria-hidden="true"></span>`);bag.setAttribute('aria-label','打开的文书匣，将差单放入匣口');}
};
const v33ResetBefore=easyReset;
easyReset=function(){clearTimeout(v33StowTimer);v33StowTimer=0;v33StowBusy=false;v33DropPoint=null;v33ResetBefore();};
easyRender();
