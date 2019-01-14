require('./config');
const BoImportation = require('./bo/BoImportation.js');

(async () => {
  await BoImportation.importStatisticsAllWorld();
})();
