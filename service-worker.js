/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4d5f8f65c63e784e852c6089047337b"
  },
  {
    "url": "about.html",
    "revision": "ae46173282584fc16a3e0429057ace5c"
  },
  {
    "url": "about/index.html",
    "revision": "f366778e80572d30fbe4f0f1ce5a3895"
  },
  {
    "url": "assets/css/0.styles.38b8e3a6.css",
    "revision": "3606499033bb9cafc85e807809a67835"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a3d65683.js",
    "revision": "a8f89c5ffcbcf1471887181064a82ed4"
  },
  {
    "url": "assets/js/11.4fda594a.js",
    "revision": "802c95ce352eb69313515a25a5018df0"
  },
  {
    "url": "assets/js/12.a4310004.js",
    "revision": "ddc9c16edf29409ba790b21e5075b2b0"
  },
  {
    "url": "assets/js/2.dacace9f.js",
    "revision": "4256a0a02a48a771277db0fc4a4d97bb"
  },
  {
    "url": "assets/js/3.f724e14b.js",
    "revision": "285d546e72b453484773b61c50e12a90"
  },
  {
    "url": "assets/js/4.4d0f4ace.js",
    "revision": "e11f99b0477a01ea1a0ed9d8053bf019"
  },
  {
    "url": "assets/js/5.fa95321c.js",
    "revision": "db729983ac97cf9eb1e46524b6663209"
  },
  {
    "url": "assets/js/6.a51bd1da.js",
    "revision": "794dc5dbe4375715bfcca2b4151bee15"
  },
  {
    "url": "assets/js/7.5749ce67.js",
    "revision": "de17a3b985d254491031f2fa118804fb"
  },
  {
    "url": "assets/js/8.20380ed9.js",
    "revision": "ad7b1a6f5ae30c4e2017725c433a28dd"
  },
  {
    "url": "assets/js/9.3009840a.js",
    "revision": "c895103b929441214358f427cd9130ad"
  },
  {
    "url": "assets/js/app.d7b8f431.js",
    "revision": "4cf2dfe4ac2e0ef24e8fd0890ec79add"
  },
  {
    "url": "guide/index.html",
    "revision": "10c4b092ce3a871a825db7232f908a8a"
  },
  {
    "url": "index.html",
    "revision": "281c07348e8e339a1acdc2cced4bdb58"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
