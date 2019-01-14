const cron = require('node-cron');
const BoImportation = require('./BoImportation');

class BoCron {
  async loadStatistics() {
    cron.schedule(
      '0 8 * * *',
      async () => {
        console.log('Cron iniciado...');
        const startTime = new Date();
        await BoImportation.importStatisticsAllWorld();
        const endTime = new Date();
        const timeDiff = (endTime - startTime) / 1000;
        console.log(`Cron finalizado! tempo de duração: ${timeDiff} segundos`);
      },
      {
        scheduled: true,
        timezone: 'America/Sao_Paulo',
      },
    );
  }
}

module.exports = new BoCron();
