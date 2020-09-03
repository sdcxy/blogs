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
    "revision": "11fbebdf4cee924bf8145231fdad5af8"
  },
  {
    "url": "about/index.html",
    "revision": "649e8538a700ef41b6219c6f24776738"
  },
  {
    "url": "assets/css/0.styles.3eb3651b.css",
    "revision": "5ebce06b845b39a5539db65a18ed3cd4"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.0cd30570.js",
    "revision": "70fa44b990344f5b67d96a8b0ad9c7b5"
  },
  {
    "url": "assets/js/10.c756fadc.js",
    "revision": "1b4e569f93d712e78ba8e08706dfbd44"
  },
  {
    "url": "assets/js/11.c060cb51.js",
    "revision": "927f42826e6c3aa8affd016f66a6638e"
  },
  {
    "url": "assets/js/12.8b131939.js",
    "revision": "43fa51be6c0b08407549e7fca9d41fe4"
  },
  {
    "url": "assets/js/13.250eeaf4.js",
    "revision": "d9ae9f40b4787d59435e50008b966f1f"
  },
  {
    "url": "assets/js/14.e8ae407b.js",
    "revision": "02ea19ae956d90a6e6edb874d9be75b8"
  },
  {
    "url": "assets/js/15.2657d4b1.js",
    "revision": "1d8c9b24a1e1ba260d34f1f04c43206f"
  },
  {
    "url": "assets/js/16.e41a1bb5.js",
    "revision": "9805720b911e767ab0c8fccaa318f15a"
  },
  {
    "url": "assets/js/17.0711a377.js",
    "revision": "313919e6523bb9b89a7d68b4fd096f18"
  },
  {
    "url": "assets/js/18.f8c7fdcf.js",
    "revision": "ec35978f91c32b9d384eee3e7dc9dab6"
  },
  {
    "url": "assets/js/19.2d25a02c.js",
    "revision": "98079a28a1183a10dcffcdf481ac50b2"
  },
  {
    "url": "assets/js/20.d9577c6b.js",
    "revision": "8814f36716e5e439ddb2d1f41e2a39e6"
  },
  {
    "url": "assets/js/3.e5abaf02.js",
    "revision": "e02a51778d4e68af3b361f2377f9193b"
  },
  {
    "url": "assets/js/4.1303b898.js",
    "revision": "55132642e5e9659b1b493e35afef7c02"
  },
  {
    "url": "assets/js/5.baec9ebf.js",
    "revision": "6b0b01213148a72d137c02f3c966d32e"
  },
  {
    "url": "assets/js/6.0fa7a186.js",
    "revision": "2edfecf20c65832846b2aa22fa82c2bb"
  },
  {
    "url": "assets/js/7.291bfc73.js",
    "revision": "98610c65fd5534033d471e9429b9989a"
  },
  {
    "url": "assets/js/8.460704f9.js",
    "revision": "d1fefccc25c92b5e0f63b26fa875f0b3"
  },
  {
    "url": "assets/js/9.44dd4600.js",
    "revision": "07f5bdd63b8b838b59e3036b0ea167bb"
  },
  {
    "url": "assets/js/app.bf03eef6.js",
    "revision": "63df04e013dfd3cba4f1b2e9d21aaa06"
  },
  {
    "url": "avatar.jpg",
    "revision": "dab59f0406ff3db0c6693c8e34f70dbb"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "c318903cede59b963c70d866c72e905d"
  },
  {
    "url": "categories/index.html",
    "revision": "15b2f4755bc0a25fdf43876f6a2344ff"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "e167cfe741cf18cfcf2787b9174f03a3"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "38aa84a9e13de3417d438de6d419b878"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "imgs/vuepress/vuepress博客网站首页.png",
    "revision": "0c4b2ca18908f1d2626cf3d9d32ed3bd"
  },
  {
    "url": "index.html",
    "revision": "055d870770ff2665544ca44b6e9b72fc"
  },
  {
    "url": "logo.png",
    "revision": "24c2315f07c387b7a6c5d35e9dd97bef"
  },
  {
    "url": "tag/配置/index.html",
    "revision": "9aaa1bdf933fe8e0c4c79333eae2e3c7"
  },
  {
    "url": "tag/index.html",
    "revision": "193a6548e18dcba30dc6f6e482645244"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "132eb92fcdc71d0b09d6f48694696ebc"
  },
  {
    "url": "timeline/index.html",
    "revision": "989c1fea47ee9d40d9959a47486895f4"
  },
  {
    "url": "views/frontmatter/index.html",
    "revision": "dd8c61b0be2bd38ae10751a329c560af"
  },
  {
    "url": "views/markdown/index.html",
    "revision": "e0b9a6d6213ea295ba86713027d7c4ad"
  },
  {
    "url": "views/markdown/Markdown.html",
    "revision": "b1e8bf07a27459c851aab562d16337c2"
  },
  {
    "url": "views/markdown/Typora 上传图片到gitee仓库.html",
    "revision": "8b97209256b2876b02ae2273cd2d030e"
  },
  {
    "url": "views/vue/vue.html",
    "revision": "7474f2f473f327f7fbe9e3a7dc27cfc4"
  },
  {
    "url": "views/vuepress/index.html",
    "revision": "f8d1afbc6514c01ed8cdc69c8d43918c"
  },
  {
    "url": "views/vuepress/vuepress_pwa.html",
    "revision": "a0a011e384eedb63aa84865c942df709"
  },
  {
    "url": "vuepress.png",
    "revision": "ffe2d67cad8c6444485f9664ed889064"
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
