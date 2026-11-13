/* Inspection follows autumn collection; the later voyage keeps its existing weather. */
function v44InspectionWeather(scene,step,isCourt){
 const active=step===6&&!!isCourt;
 scene.classList.toggle('v44-inspection-season',active);
 if(active){scene.dataset.season='autumn';const label=scene.querySelector('.easy-season');if(label)label.textContent='冬 · 收验'}
}
const v44RenderBefore=easyRender;
easyRender=function(){v44RenderBefore();if(s.ch!==0)return;const scene=document.querySelector('.easy-scene');if(scene)v44InspectionWeather(scene,easy.step,courtView())};
easyRender();
