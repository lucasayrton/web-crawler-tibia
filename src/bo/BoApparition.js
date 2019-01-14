const Apparition = require('../models/Apparition');

class BoApparition {
  async create(data) {
    const result = await Apparition.create(data);
    return result;
  }
}

module.exports = new BoApparition();
