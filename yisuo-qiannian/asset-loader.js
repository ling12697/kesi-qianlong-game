/* Critical art first. Optional prefetch must never control navigation. */
(()=>{'use strict';
 const VERSION='tvready16',CACHE='yisuo-images-v1';
 const openings=[['level-1/loom-first.jpg'],['level-2/assets/pov-study.webp','level-2/assets/pov-study-preview.webp'],['level-3/clean-court-spring.lite.webp']];
 const warmed=new Map();let active=-1,manifest;
 if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js?v='+VERSION,{updateViaCache:'none'}).catch(()=>{});
 function warm(src){if(warmed.has(src))return warmed.get(src);const im=new Image();im.fetchPriority='high';
  const promise=new Promise(resolve=>{im.onload=()=>{if(im.decode)im.decode().catch(()=>{}).then(resolve);else resolve()};im.onerror=resolve;im.src=src});warmed.set(src,promise);return promise;
 }
 function prepare(i){active=i;return Promise.race([Promise.all(openings[i].map(warm)),new Promise(resolve=>setTimeout(resolve,1200))])}
 async function background(i){
  active=i;
  // Third chapter warms its next rooms in story order, not the entire asset archive.
  if(i===2)return;
  try{
   manifest??=fetch('assets-manifest.json?v='+VERSION).then(r=>r.json());
   const groups=await manifest;
   const files=groups[i].filter(f=>/\.(webp|jpg|png)$/.test(f.url)&&!f.url.includes('/references/'));
   let cache=null;try{if('caches' in window)cache=await caches.open(CACHE)}catch{}
   let cursor=0;
   async function worker(){while(active===i&&cursor<files.length){const file=files[cursor++],url=new URL(file.url,location.href).href;
    try{if(cache&&await cache.match(url))continue;
     const abort=new AbortController(),timer=setTimeout(()=>abort.abort(),8000);
     try{const response=await fetch(url,{signal:abort.signal,priority:'low'});if(response.ok&&response.headers.get('content-type')?.startsWith('image/')){if(cache)await cache.put(url,response);else await response.arrayBuffer()}}finally{clearTimeout(timer)}
    }catch{/* An optional image failure never blocks gameplay. */}
   }}await worker();
  }catch{}
 }
 window.gameAssets={prepare,background};
})();
