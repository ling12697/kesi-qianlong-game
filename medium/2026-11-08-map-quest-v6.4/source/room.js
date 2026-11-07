window.createRoomFlow=function({stage,room,mapScene,templeScene,toastEl,dialogueEl}){
  let busy=false,timer;
  const wait=ms=>new Promise(resolve=>{clearTimeout(timer);timer=setTimeout(resolve,ms)});
  const toast=text=>{toastEl.textContent=text;toastEl.classList.add('show');setTimeout(()=>toastEl.classList.remove('show'),2100)};
  const say=text=>{dialogueEl.textContent=text};
  async function openExplorer(which){if(busy)return false;busy=true;const explorer=which==='map'?mapScene:templeScene;explorer.hidden=false;room.classList.add('map-opening');stage.classList.add('is-pushed');await wait(720);explorer.classList.add('is-open');await wait(360);room.classList.remove('map-opening');busy=false;return true}
  async function closeExplorer(which){if(busy)return false;busy=true;const explorer=which==='map'?mapScene:templeScene;explorer.classList.remove('is-open');room.classList.add('map-opening');await wait(560);stage.classList.remove('is-pushed');await wait(620);explorer.hidden=true;room.classList.remove('map-opening');busy=false;toast(which==='map'?'舆图已收回书案':'寺庙资料已收起');return true}
  function reset(){clearTimeout(timer);busy=false;room.className='room';stage.className='stage';mapScene.hidden=true;templeScene.hidden=true;mapScene.classList.remove('is-open');templeScene.classList.remove('is-open');}
  return{openExplorer,closeExplorer,toast,say,reset,isBusy:()=>busy};
};
