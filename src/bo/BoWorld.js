const World = require('../models/World');

class BoWorld {
  async findByName(name) {
    const world = await World.findOne({ name });
    return world;
  }

  async findById(id) {
    const world = await World.findById(id);
    return world;
  }

  async findAll() {
    const worlds = await World.find({});
    return worlds;
  }

  async create(world) {
    const newWorld = await World.create(world);
    return newWorld;
  }
}

module.exports = new BoWorld();
