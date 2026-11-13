/* 船的水线点坐标与安全水域一起校验，避免旧 CSS 横穿岸线。 */
const canalBoatRoute=[[70.5,95],[73,95.2],[75.5,95]];
const canalSafeWater=[[66.5,90],[79.5,90],[79.5,97],[66.5,97]];
function canalBoatPoint(progress){let p=Math.max(0,Math.min(1,progress))*(canalBoatRoute.length-1),i=Math.min(canalBoatRoute.length-2,Math.floor(p)),t=p-i,a=canalBoatRoute[i],b=canalBoatRoute[i+1];return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
const spatialPriorRender=easyRender;
easyRender=function(){spatialPriorRender();if(s.ch!==0)return;let scene=document.querySelector('.easy-scene');if(!scene)return;scene.querySelectorAll('.living-skiff,.living-water').forEach(el=>el.remove());if(!courtView())scene.insertAdjacentHTML('afterbegin',`<div class="canal-water-layer" aria-hidden="true"><div class="canal-boat" data-waterline="95"><img src="boat-painted.lite.webp" alt="" draggable="false"><i class="canal-wake"></i></div></div>`);};
// 用同一时钟保持重绘时船的位置连续；船身、船篙和水纹均限制在河面内。
let canalFrame=0;
function canalAnimate(now){let actor=document.querySelector('.canal-boat');if(actor&&s.ch===0){let phase=(now/18000)%2,forward=phase<=1,t=forward?phase:2-phase,p=canalBoatPoint(t);actor.style.left=p[0]+'%';actor.style.top=p[1]+'%';actor.style.setProperty('--boat-facing',forward?-1:1);actor.dataset.waterline=p[1].toFixed(2)}canalFrame=requestAnimationFrame(canalAnimate)}
canalFrame=requestAnimationFrame(canalAnimate);easyRender();
