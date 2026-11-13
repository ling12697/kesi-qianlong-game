const CACHE='yisuo-qiannian-perf4';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('yisuo-qiannian-')&&key!==CACHE)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin||!u.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 e.respondWith((async()=>{const c=await caches.open(CACHE);const hit=await c.match(r);
 if(r.mode==='navigate'||u.pathname.endsWith('.html')||u.pathname.endsWith('/')){const fresh=fetch(r).then(a=>{if(a.ok)e.waitUntil(c.put(r,a.clone()).catch(()=>{}));return a});if(hit){e.waitUntil(fresh.catch(()=>{}));return hit}return fresh}
 if(hit)return hit;const a=await fetch(r);if(a.ok)e.waitUntil(c.put(r,a.clone()).catch(()=>{}));return a})());});
