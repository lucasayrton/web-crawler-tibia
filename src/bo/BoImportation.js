const BoCrawlerTibia = require('./BoCrawlerTibia');
const BoWorld = require('./BoWorld');
const BoMonster = require('./BoMonster');
const BoApparition = require('./BoApparition');

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["importHistory"] }] */
class BoImportation {
  importStatisticsFromWorldByName(name) {
    const statistics = BoCrawlerTibia.getKillStatisticsWorld(name);
    return statistics;
  }

  async importStatisticsAllWorld() {
    const worlds = await BoWorld.findAll();
    for (const world of worlds) {
      const statistics = await this.importStatisticsFromWorldByName(world.name);
      const monsters = await BoMonster.findAll();
      for (const statistic of statistics) {
        const monster = monsters.find(monster => monster.name === statistic.name);
        if (monster && statistic.death >= 1) {
          const date = new Date();
          date.setDate(date.getDate() - 1);
          const data = {
            world: world.id,
            monster: monster.id,
            day: date,
          };
          const response = await BoApparition.create(data);
          monster.apparitions = monster.apparitions.push(response);
          await BoMonster.save(monster);
        }
      }
    }
  }
}

module.exports = new BoImportation();
