/* Keep all per-house progress and ready textiles together, outside the lower controls. */
const v39RenderBefore=easyRender;
easyRender=function(){v39RenderBefore();if(s.ch!==0)return;const scene=document.querySelector('.v37-roof-info');if(!scene)return;scene.classList.add('v39-house-layout');const groups=[...scene.querySelectorAll('.v37-roof-group')];const event=scene.querySelector('.hands-event');if(event)scene.append(event);
 const positions=[[56.8,58],[62.9,40],[74.4,27]];
 groups.forEach((group,w)=>{group.style.left=positions[w][0]+'%';group.style.top=positions[w][1]+'%'});
 scene.querySelectorAll('.hands-finished-cloth').forEach(el=>{const i=+el.dataset.index,w=workshop().orders[i]?.worker,group=groups[w];if(!group)return;let list=group.querySelector('.v39-ready-list');if(!list){list=document.createElement('div');list.className='v39-ready-list';group.append(list)}list.append(el);el.style.removeProperty('left');el.style.removeProperty('top')});
};
easyRender();
