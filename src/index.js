require('./config');
const BoImportation = require('./bo/BoImportation.js');

(async () => {
  const response = await BoImportation.importStatisticsAllWorld();
  const a = 1;
})();
