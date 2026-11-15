(()=>{'use strict';const memory=new Map(),dirty=new Set();let timer=0;
function flush(){clearTimeout(timer);timer=0;for(const k of dirty){try{const v=memory.get(k);if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch{}}dirty.clear()}
window.gameStore={flush,getItem(k){if(memory.has(k))return memory.get(k);try{return localStorage.getItem(k)}catch{return null}},setItem(k,v){v=String(v);if(memory.get(k)===v)return;memory.set(k,v);dirty.add(k);if(!timer)timer=setTimeout(flush,750)},removeItem(k){memory.set(k,null);dirty.add(k);flush()}};
addEventListener('pagehide',flush);document.addEventListener('visibilitychange',()=>{if(document.hidden)flush()});
})();