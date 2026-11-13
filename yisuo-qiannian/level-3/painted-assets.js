/* 画中人物与船只使用同一设色风格的透明素材；建筑名以书写牌匾呈现。 */
livingPerson=function(){return '<img class="painted-person" src="courier-painted.lite.webp" alt="携丝料行走的包口" draggable="false">'};
livingBoat=function(){return '<img class="painted-boat" src="boat-painted.lite.webp" alt="水道中的差船" draggable="false">'};
const paintedPriorRender=easyRender;
function paintedPlaque(el,kind,label,caption){if(!el)return;el.classList.add('architectural-plaque',kind);el.setAttribute('aria-label',label);const pointer=el.querySelector('.easy-pointer')?.outerHTML||'';el.innerHTML=pointer+'<span class="plaque-readable">'+label+'</span>'+(caption?'<small class="plaque-caption">'+caption+'</small>':'');}
easyRender=function(){paintedPriorRender();if(s.ch!==0)return;const scene=document.querySelector('.easy-scene');if(!scene)return;if(scene.classList.contains('court-view')){scene.querySelector('.court-nameplate')?.remove();paintedPlaque(scene.querySelector('.court-plaque.gate'),'official','苏州织造署','');scene.insertAdjacentHTML('beforeend','<small class="painted-court-note">院落格局示意</small>');}else{const nodes=scene.querySelectorAll('.easy-place');paintedPlaque(nodes[0],'official','织造署 西库堂 · 收验','西库堂 · 收验');paintedPlaque(nodes[1],'merchant','纱缎庄','');}};
easyRender();
