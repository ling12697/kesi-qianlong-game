/* Warm only the opening image for the chapter the player chooses. */
(() => {
  'use strict';
  const openings = [
    'level-1/loom-first.jpg',
    'level-2/assets/pov-study.webp',
    'level-3/clean-court-spring.lite.webp'
  ];
  const loading = new Set();

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js?v=landscape1', {updateViaCache: 'none'}).catch(() => {});
  }

  window.gameAssets = {
    prepare(chapter) {
      const src = openings[chapter];
      if (!src || loading.has(src)) return;
      loading.add(src);
      const image = new Image();
      image.decoding = 'async';
      image.onload = image.onerror = () => loading.delete(src);
      image.src = src;
    }
  };
})();
