const version="1529418922981",baseDir="pdfanno/latest";console.log("service worker version:",version);const CACHE_NAME="pdfanno-cache-v"+version,urlsToCache=[];console.log("urlsToCache:",urlsToCache.join("\n")),self.addEventListener("install",e=>{console.log("install:",e),self.skipWaiting(),e.waitUntil(caches.open(CACHE_NAME).then(e=>(console.log("Opened cache."),e.addAll(urlsToCache))))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request,{ignoreSearch:!0}).then(s=>s||fetch(e.request)))}),self.addEventListener("activate",e=>{console.log("activate:",e),e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(e!=CACHE_NAME)return caches.delete(e)}))))});
//# sourceMappingURL=sw.js.map
