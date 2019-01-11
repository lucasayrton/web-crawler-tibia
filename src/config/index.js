const dotenv = require('dotenv');

class Config {
  constructor() {
    this.loadEnvironments();
  }

  loadEnvironments() {
    this.dotEnvResult = dotenv.config();
    if (this.dotEnvResult.error) {
      throw new Error('Ocorreu um erro ao carregar as variáveis de ambiente');
    }
  }
}

module.exports = new Config();
