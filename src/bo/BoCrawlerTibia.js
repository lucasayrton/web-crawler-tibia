const RcTibia = require('../services/RcTibia');
const AdpHtmlTibia = require('../adapter/AdpHtmlTibia');

class BoCrawlerTibia {
  async getKillStatisticsWorld(world) {
    const html = await RcTibia.getPageKillStatistics(world);
    return AdpHtmlTibia.getKillStatistics(html);
  }
}

module.exports = new BoCrawlerTibia();
