require('./config');
const BoImportation = require('./bo/BoImportation.js');
const BoCron = require('./bo/BoCron.js');

(async () => {
  console.log('Web Crawler Tibia iniciado!');
  await BoCron.loadStatistics();
})();
