const CACHE='yisuo-qiannian-smooth19',IMAGE_CACHE='yisuo-images-smooth17',pending=new Map();
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const key of await caches.keys())if((key.startsWith('yisuo-qiannian-')||key.startsWith('yisuo-images-'))&&key!==CACHE&&key!==IMAGE_CACHE)await caches.delete(key);await self.clients.claim()})()));
async function network(request){let last;for(let attempt=0;attempt<2;attempt++){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);try{const response=await fetch(request,{signal:controller.signal,cache:attempt?'reload':'default'});if(response.ok||response.status<500)return response;last=new Error('HTTP '+response.status)}catch(error){last=error}finally{clearTimeout(timer)}}throw last}
self.addEventListener('fetch',e=>{const request=e.request,u=new URL(request.url);if(request.method!=='GET'||u.origin!==location.origin||!u.pathname.startsWith(new URL(self.registration.scope).pathname))return;
const retry=u.searchParams.has('art-retry'),key=new URL(u);key.search='';if(key.pathname.endsWith('/'))key.pathname+='index.html';
e.respondWith((async()=>{const image=/\.(webp|jpg|jpeg|png|svg)$/.test(key.pathname);let cache,hit;try{cache=await caches.open(image?IMAGE_CACHE:CACHE);hit=await cache.match(key.href)}catch{}
const shell=key.pathname===new URL('index.html',self.registration.scope).pathname||/\/asset-loader\.js$/.test(key.pathname);
if(hit&&!shell&&!retry)return hit;
try{const taskKey=key.href+(retry?'#retry':'');let task=pending.get(taskKey);if(!task){task=network(request).then(response=>{if(response.ok&&cache)e.waitUntil(cache.put(key.href,response.clone()).catch(()=>{}));return response});pending.set(taskKey,task);task.finally(()=>pending.delete(taskKey)).catch(()=>{})}return(await task).clone()}catch(error){if(hit)return hit;throw error}})());});
