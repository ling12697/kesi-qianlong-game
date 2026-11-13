/* Household controls belong only to the village allocation/weaving/collection map. */
function v41HouseholdsVisible(step,isCourt,view){return step>=2&&step<=5&&!isCourt&&view==='map'}
function v41CleanHouseholds(scene,visible){
 if(visible)return;
 scene.querySelectorAll('.v37-roof-group,.house-work,.hands-door-state,.hands-finished-cloth,.v39-ready-list,.v40-allocation').forEach(el=>el.remove());
 scene.querySelectorAll('[data-easy-worker]').forEach(el=>{if(+el.dataset.easyWorker>=0)el.remove()});
}
const v41RenderBefore=easyRender;
easyRender=function(){
 v41RenderBefore();if(s.ch!==0)return;const scene=document.querySelector('.easy-scene');if(!scene)return;
 v41CleanHouseholds(scene,v41HouseholdsVisible(easy.step,courtView(),scene.dataset.bossView));
};
easyRender();
