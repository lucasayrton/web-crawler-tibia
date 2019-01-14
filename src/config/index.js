const dotenv = require('dotenv');
const mongoose = require('mongoose');

class Config {
  constructor() {
    this.loadEnvironments();
    this.database();
  }

  loadEnvironments() {
    this.dotEnvResult = dotenv.config();
    if (this.dotEnvResult.error) {
      throw new Error('Ocorreu um erro ao carregar as variáveis de ambiente');
    }
  }

  database() {
    mongoose.connect(
      process.env.DB_URL,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
      },
    );
  }
}

module.exports = new Config();
