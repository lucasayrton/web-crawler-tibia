const RcGen = require('./RcGen');

class RcTibiaApi extends RcGen {
  defineBaseUrl() {
    return 'https://api.tibiadata.com/v2';
  }

  listWorlds() {
    return this.rp({
      ...this.getBaseOptions(),
      uri: '/worlds.json',
    }).json();
  }
}

module.exports = new RcTibiaApi();
