/* A highlighted household is now a direct entry into task allocation. */
let v40House=null;
const v40VisitBefore=easyVisit;
easyVisit=function(i){
 if(s.ch===0&&i>=2&&i<=4){const w=i-2,orders=workshop().orders;
  if(easy.step===2){
   if(easy.selected!==null&&['pending','queued'].includes(orders[easy.selected]?.status)){v40House=null;easyAssign(easy.selected,w);return}
   if(orders.some(o=>o.status==='pending')){v40House=w;easyRender();return}
  }
  if(easy.step>=2&&easy.step<=3){const index=orders.findIndex(o=>o.worker===w&&o.status!=='collected');if(index>=0){detailOpen('weave',index);return}}
 }
 return v40VisitBefore(i);
};
function v40Assign(i,w){if(workshop().orders[i]?.status!=='pending')return;v40House=null;easyAssign(i,w)}
const v40MaterialBefore=handsMaterialMarkup;
handsMaterialMarkup=function(i){let html=v40MaterialBefore(i);
 html=html.replace(/<small>丝料放齐后自动合盖<\/small>|<small>丝料齐备\s*·\s*箱盖已合<\/small>/g,'')
 .replace('按样配料</span>','按样配料<em class="v40-material-instruction">经丝、彩纬、捻金线，分别点击拖拽入箱。</em></span>')
 .replace('<span>经丝、彩纬、捻金线，分组入箱。</span>','');return html;
};
const v40RenderBefore=easyRender;
easyRender=function(){v40RenderBefore();if(s.ch!==0){v40House=null;return}const scene=document.querySelector('.easy-scene');if(!scene)return;
 scene.classList.add('v40-clear-controls');scene.querySelector('.boss-map-caption')?.remove();
 if(easy.step!==2)v40House=null;
 const orders=workshop().orders;
 scene.querySelectorAll('.house-work').forEach(el=>{const o=orders[+el.dataset.order];if(!o)return;
  const frame=el.querySelector('.house-frame');if(frame){frame.setAttribute('aria-label','织造进程');frame.insertAdjacentHTML('beforebegin','<span class="v40-progress-title">织造进程</span>')}
  el.insertAdjacentHTML('beforeend','<span class="v40-near-hint">点击近看织造</span>');
 });
 if(!courtView()&&easy.step>=2&&easy.step<=4){const guide=scene.querySelector('.easy-guide p');if(guide)guide.textContent=easy.selected!==null?'点一家织户，安排这包任务。':orders.some(o=>o.status==='pending')?'点击织户选择任务。送料时可继续安排。':'点击织户或织造进程，近看织造。';}
 if(v40House!==null&&!courtView()&&easy.step===2){const w=v40House;
  scene.insertAdjacentHTML('beforeend',`<aside class="v40-allocation" role="dialog" aria-label="为${easyNames[w]}安排任务"><header><span>${easyNames[w]} · 选择承织任务</span><button onclick="v40House=null;easyRender()" aria-label="关闭分工">×</button></header><div>${orders.map((o,i)=>o.status==='pending'?`<button onclick="v40Assign(${i},${w})">${silkPanel(i)}<b>${livingNames[i]}</b><small>${(hands().materials[i]||[]).length===3?'派给这家织户':'为这家织户配料'}</small></button>`:'').join('')}</div></aside>`);
 }
};
easyRender();
