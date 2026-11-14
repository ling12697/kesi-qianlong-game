const CACHE='yisuo-qiannian-tvready16',IMAGE_CACHE='yisuo-images-v1';
const pending=new Map();
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{const images=await caches.open(IMAGE_CACHE);
 for(const key of await caches.keys())if(key.startsWith('yisuo-qiannian-')&&key!==CACHE){
  const old=await caches.open(key);
  for(const request of await old.keys())if(/\.(webp|jpg|jpeg|png|svg)$/.test(new URL(request.url).pathname)&&!await images.match(request)){const response=await old.match(request);if(response?.ok)await images.put(request,response)}
  await caches.delete(key);
 }await self.clients.claim()})().catch(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const request=e.request,u=new URL(request.url);if(request.method!=='GET'||u.origin!==location.origin)return;
 // HTML restart tokens reset gameplay, not the cached image or document bytes.
 const key=new URL(u);key.search='';
 if(u.pathname.endsWith('/'))key.pathname+='index.html';
 e.respondWith((async()=>{
  const image=/\.(webp|jpg|jpeg|png|svg)$/.test(key.pathname);
  let cache=null,hit;try{cache=await caches.open(image?IMAGE_CACHE:CACHE);hit=await cache.match(key.href)}catch{}
  // The shell and loader must see future updates; chapter files are versioned by CACHE.
  const shell=key.pathname===new URL('index.html',self.registration.scope).pathname||/\/(asset-loader\.js|assets-manifest\.json)$/.test(key.pathname);
  if(hit&&!shell)return hit;
  try{let task=pending.get(key.href);if(!task){task=fetch(request).then(response=>{if(response.ok&&cache)e.waitUntil(cache.put(key.href,response.clone()).catch(()=>{}));return response});pending.set(key.href,task);task.finally(()=>pending.delete(key.href)).catch(()=>{})}return (await task).clone()}catch(error){if(hit)return hit;throw error}
 })());
});
