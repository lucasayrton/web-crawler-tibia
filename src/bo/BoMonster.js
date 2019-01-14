const Monster = require('./../models/Monster');

class BoMonster {
  async findAll() {
    const monsters = await Monster.find({});
    return monsters;
  }

  async findByName(name) {
    const monster = await Monster.findOne({ name });
    return monster;
  }

  async create(monster) {
    const newMonster = await Monster.create(monster);
    return newMonster;
  }

  async save(monster) {
    const savedMonster = await Monster.updateOne({ _id: monster._id }, monster);
    return savedMonster;
  }
}

module.exports = new BoMonster();
