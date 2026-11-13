/* Rebuild interrupted courier jobs after scene changes or loading an existing save. */
let v42Resuming=false;
function v42ResumeCouriers(){
 if(v42Resuming||s.ch!==0||easy.step<2||easy.step>4||courtView())return;
 const scene=document.querySelector('.easy-scene');if(!scene||scene.dataset.bossView!=='map')return;
 v42Resuming=true;
 try{
  const state=workshop();
  state.orders.forEach((o,i)=>{if(o.worker<0||!['queued','transit'].includes(o.status)||(i===0&&state.action))return;
   if(roadState.job?.order===i||roadState.queue.some(j=>j.order===i))return;
   workshopQueue(i);
  });
  if(state.action&&!roadState.job?.assist&&!roadState.queue.some(j=>j.assist))workshopAssist();
  if(roadState.job||roadState.queue.length)roadStart();
 }finally{v42Resuming=false}
}
const v42RenderBefore=easyRender;
easyRender=function(){v42RenderBefore();v42ResumeCouriers()};
easyRender();
