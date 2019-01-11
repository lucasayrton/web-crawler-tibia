const RcGen = require('./RcGen');

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["defineBaseUrl"] }] */
class RcTibia extends RcGen {
  defineBaseUrl() {
    return 'https://www.tibia.com';
  }

  getPageKillStatistics(world) {
    return this.rp({
      ...this.getBaseOptions(),
      method: 'POST',
      uri: '/community/?subtopic=killstatistics',
      form: {
        world,
        'Submit.x': 50,
        'Submit.y': 15,
      },
    });
  }
}

module.exports = new RcTibia();
