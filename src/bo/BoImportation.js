const BoCrawlerTibia = require('./BoCrawlerTibia');
const BoWorld = require('./BoWorld');

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["importHistory"] }] */
class BoImportation {
  importStatisticsFromWorldByName(name) {
    const statistics = BoCrawlerTibia.getKillStatisticsWorld(name);
    return statistics;
  }

  async importStatisticsAllWorld() {
    const worlds = await BoCrawlerTibia.getWorlds();
    worlds.forEach(world => {
      let monsters = BoCrawlerTibia.getKillStatisticsWorld(world);
      monsters =
    });
  }
}

module.exports = new BoImportation();
