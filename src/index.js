require('./config');
const BoCrawlerTibia = require('./bo/BoCrawlerTibia');

(async () => {
  // const response = BoCrawlerTibiaBosses.getWorldData('inabra');
  const response = await BoCrawlerTibia.getKillStaticsWorld();
})();
