const RcTibia = require('../services/RcTibia');
const RcTibiaApi = require('../services/RcTibiaApi');
const AdpHtmlTibia = require('../adapter/AdpHtmlTibia');

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getWorlds"] }] */
class BoCrawlerTibia {
  async getWorlds() {
    const {
      worlds: { allworlds },
    } = await RcTibiaApi.listWorlds();
    return allworlds.map(world => world.name);
  }

  async getKillStatisticsWorld(world) {
    const html = await RcTibia.getPageKillStatistics(world);
    return AdpHtmlTibia.getKillStatistics(html);
  }
}

module.exports = new BoCrawlerTibia();
