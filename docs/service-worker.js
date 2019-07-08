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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f541f36a3a78593edbc4b0b1f15e657c"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "ebb75f612bf0ac50c0159d4b0361e095"
  },
  {
    "url": "assets/css/0.styles.edfcbda7.css",
    "revision": "22adbea638bd452f8ad6cc6ac5e06782"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.caecc25d.js",
    "revision": "f2b76978d78d30fbc6e2dd820334cb35"
  },
  {
    "url": "assets/js/10.07bc526c.js",
    "revision": "dcd07d5474a492e4f838d10d2dfa549d"
  },
  {
    "url": "assets/js/11.61ffaa51.js",
    "revision": "c8d4956cd84ca295b2df1f96e5343f9f"
  },
  {
    "url": "assets/js/12.2bc7adcf.js",
    "revision": "826946e2443af3f1f1ea191e6412ee27"
  },
  {
    "url": "assets/js/13.ba934d48.js",
    "revision": "3c1c93eb3ed1fda6a3aefedd5897a4fa"
  },
  {
    "url": "assets/js/14.d998b345.js",
    "revision": "4f47b054d969e68cbe497596fc0db1d1"
  },
  {
    "url": "assets/js/15.a439b388.js",
    "revision": "30cc89380aed4522385da2aa96a1ce4f"
  },
  {
    "url": "assets/js/16.f8154307.js",
    "revision": "026d04514689110e9b5dd746e66401cd"
  },
  {
    "url": "assets/js/17.594ea8e3.js",
    "revision": "0d15e2cf00f2d50a59710a792927d106"
  },
  {
    "url": "assets/js/18.13e12d1d.js",
    "revision": "fead12d8482baf90a4462977c3bf74b9"
  },
  {
    "url": "assets/js/19.9b1a6b0b.js",
    "revision": "4d34255cff942b297b1966dfcbdc7a50"
  },
  {
    "url": "assets/js/2.cb44acb3.js",
    "revision": "e03d7e5a93f606a93feefeca190c318d"
  },
  {
    "url": "assets/js/20.00ba9028.js",
    "revision": "765e71438dcd5a0c609193123dc233f8"
  },
  {
    "url": "assets/js/21.ff9ef58b.js",
    "revision": "33b7765ff9d723ff3fcec1417de4ffe8"
  },
  {
    "url": "assets/js/22.5758a0cc.js",
    "revision": "f8d36171e57af93d4b8b1a4064403b3b"
  },
  {
    "url": "assets/js/23.98445a10.js",
    "revision": "983e1f7cee0934e58a79b56bb20ff3a9"
  },
  {
    "url": "assets/js/24.2db6e505.js",
    "revision": "a4cbc16f12b343da912174929feb8070"
  },
  {
    "url": "assets/js/25.0f8f8182.js",
    "revision": "38b03e5aa3fbfd1722254dcb5765f9ce"
  },
  {
    "url": "assets/js/26.8e505c3c.js",
    "revision": "2a4835a41d2affa91a01c3deebc5154c"
  },
  {
    "url": "assets/js/27.0abe491c.js",
    "revision": "cf39289daefd437faf8d91db6a58e1cc"
  },
  {
    "url": "assets/js/28.d0ecbd34.js",
    "revision": "3741b06b668f128635e40f87bba30d76"
  },
  {
    "url": "assets/js/29.98ff90d5.js",
    "revision": "7f3e66f560c0088d6a67232692e04c07"
  },
  {
    "url": "assets/js/3.bcc0fe09.js",
    "revision": "c40e60e9db4f4d59549df1922ddd3401"
  },
  {
    "url": "assets/js/30.e7470a6b.js",
    "revision": "cc0a020f2ec178a8c0974f6d4f3efe10"
  },
  {
    "url": "assets/js/31.97f9dae5.js",
    "revision": "ae9ef80b1257afdecddaf5b96359caac"
  },
  {
    "url": "assets/js/32.f9489f4d.js",
    "revision": "462ccf5c9e9f239ecc2e74e26aa9e3b4"
  },
  {
    "url": "assets/js/33.bb65feb5.js",
    "revision": "1835947e539811f149f37e6456ea7301"
  },
  {
    "url": "assets/js/34.c5b7810d.js",
    "revision": "40e52b5ecdc881808a435a2bb8b4b943"
  },
  {
    "url": "assets/js/35.03ee97a3.js",
    "revision": "3df93ed5aecf0df11c27b0c97d5eed30"
  },
  {
    "url": "assets/js/36.540ffda6.js",
    "revision": "a232e0dd6abb8f8576d2d55db2a6d285"
  },
  {
    "url": "assets/js/37.a0365425.js",
    "revision": "ab7c58ef540f213d815d25cd5dd3ec91"
  },
  {
    "url": "assets/js/38.a5e2f091.js",
    "revision": "57d84f00c562e91c65e8a7301e3cce49"
  },
  {
    "url": "assets/js/39.ffa083d0.js",
    "revision": "37bd11805e128e98157fef4fa17436ab"
  },
  {
    "url": "assets/js/4.7134bb61.js",
    "revision": "e2254165cdbc1e6942285b920f7828f3"
  },
  {
    "url": "assets/js/40.fdae8810.js",
    "revision": "258f0fb807e729e1ca4621f5f7bbef47"
  },
  {
    "url": "assets/js/41.8d1c5d8e.js",
    "revision": "24c3e54267f4a805cbbec17f954a0b79"
  },
  {
    "url": "assets/js/42.423b9a66.js",
    "revision": "06e4ba8ddbcb4c0c0b666aa9969bcd5a"
  },
  {
    "url": "assets/js/43.7341f3b7.js",
    "revision": "b35c27b07d6fe9062ec620c57eb05a9c"
  },
  {
    "url": "assets/js/44.684e3107.js",
    "revision": "7b047f7ba39d2ccfdeafe0850f81f8a2"
  },
  {
    "url": "assets/js/45.cacb4a57.js",
    "revision": "5bfa0834b5aae19dfd51ee4ec946e5d5"
  },
  {
    "url": "assets/js/46.d483da6d.js",
    "revision": "36862d79d7c2c4fb1a694c2ea744636a"
  },
  {
    "url": "assets/js/47.9d608a94.js",
    "revision": "b7bda6a2edf6680102bc178cc0b57f63"
  },
  {
    "url": "assets/js/48.96c8a11e.js",
    "revision": "e64b0f9045179696682d1c86861394d4"
  },
  {
    "url": "assets/js/49.c9100b8a.js",
    "revision": "32096b7fc4d085a1f199aef20411fe85"
  },
  {
    "url": "assets/js/5.65235f21.js",
    "revision": "657a077d5e75c11826595d3aea3f9f52"
  },
  {
    "url": "assets/js/50.3aa9fab4.js",
    "revision": "0448ba88b1f9766a97cdbefac8ad5b61"
  },
  {
    "url": "assets/js/51.4cbe4ab9.js",
    "revision": "e0c845474864c92655557d0ade5054f0"
  },
  {
    "url": "assets/js/6.22997b8e.js",
    "revision": "7daa6749ed9b176f2a98281eec45ae58"
  },
  {
    "url": "assets/js/7.8f084b5b.js",
    "revision": "728eacd17487c466117491eefaf02e77"
  },
  {
    "url": "assets/js/9.bb967405.js",
    "revision": "50c79e324f4d1b5d6437760d1d24e960"
  },
  {
    "url": "assets/js/app.3f3c2f28.js",
    "revision": "0a7e21b53cda3ed4452c3213228ca850"
  },
  {
    "url": "authors/index.html",
    "revision": "059ef741902fb3c399ebc93a1a96d65c"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "0b5c03222f7a3cfbd8bf60c5c6349514"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/essays.html",
    "revision": "6154df6240e1077484ed0a171ece3e26"
  },
  {
    "url": "categories/index.html",
    "revision": "6edf152ff4e0878a71a6615f67bea45e"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "0b6f2cdd51482c08d8e731a58930c555"
  },
  {
    "url": "contact/index.html",
    "revision": "d7fac7f098d31ae8bb885c1bdbbdbca6"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "005d721282e8e0fbd41bec229f702e04"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/devs/2019-07-01-midi_in_crostini.html",
    "revision": "8415e2fb86c00c6e9ac019b44ed7365e"
  },
  {
    "url": "posts/devs/crouton.html",
    "revision": "684371a5ea628d415987992f0872048d"
  },
  {
    "url": "posts/devs/emacs-basics.html",
    "revision": "ef8622167ff17f88d05d9f5daa56e5d0"
  },
  {
    "url": "posts/essays/2019-06-24-dangers_of_hope.html",
    "revision": "80ddcc814a78041d38271aa226452fa5"
  },
  {
    "url": "posts/essays/2019-06-25-we_need_courage.html",
    "revision": "bfafd95e2113451a5ecb29e91fcab4f8"
  },
  {
    "url": "posts/essays/2019-07-08-unrequited_love.html",
    "revision": "cfd7c8ea364ed176a54f8d08d25012e8"
  },
  {
    "url": "posts/index.html",
    "revision": "21b8040fbe14c9e4b7f3c4c333c472bf"
  },
  {
    "url": "posts/lf/0-settings.html",
    "revision": "6783b6d48b116a0ec7ea3e73e810c4fd"
  },
  {
    "url": "posts/lf/1-basics.html",
    "revision": "997fd6ca977c79262f70303e85c4e4cb"
  },
  {
    "url": "posts/lf/2-induction.html",
    "revision": "aaf9d7e7bbc6cee5e2591ae3e8344dab"
  },
  {
    "url": "posts/lf/3-lists.html",
    "revision": "92678f9419a60428ca4853b84fc723ad"
  },
  {
    "url": "posts/lf/4-poly.html",
    "revision": "23424bedea26d2f10eee89e74692c0f2"
  },
  {
    "url": "posts/lf/5-tactics.html",
    "revision": "25621e84d310679077238bc614e027fd"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "f3a63d312d43868b50d68143b5d5034b"
  },
  {
    "url": "posts/plf/1-equiv.html",
    "revision": "701c18072c304cacbfc18974a021d145"
  },
  {
    "url": "posts/plf/2-hoare1.html",
    "revision": "f6a86a956744b313533b1555bb4e46b1"
  },
  {
    "url": "posts/vst/forward_command.html",
    "revision": "6a4f0c89c235874c4aa6b15dcac63af8"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
