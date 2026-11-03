/* Infinite Mage — temporary ad shutdown.
   This repository will use a different ad provider later.
   Keep the existing ad configuration and integration code, but do not load
   or execute any current ad placements until the new ad setup is installed. */
(function () {
  'use strict';
  window.__mangaAtlasAdsSystemLoaded = true;
  window.__mangaAtlasAdsDisabled = true;
  return;
})();
