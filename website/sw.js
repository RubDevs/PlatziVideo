const VERSION = "v1"

self.addEventListener('install', event => {
    event.waitUntil(prechache())
})

self.addEventListener('fetch', event => {
    const request = event.request

    //only GET
    if(request.method != 'GET'){
        return 
    }

    //search in cache
    event.respondWith(cachedResponse(request))

    //update cache
    event.waitUntil(updateCache(request))
})

async function prechache(){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/snake.mp4',
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request){
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request,response)
}