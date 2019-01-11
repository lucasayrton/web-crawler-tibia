const rp = require('request-promise');

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["defineBaseUrl"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_baseUrl"] }] */
class RcGen {
  constructor() {
    this._baseUrl = null;
    this.rp = rp;
  }

  defineBaseUrl() {
    throw new Error('You have to implement the method defineBaseUrl');
  }

  getBaseUrl() {
    if (this._baseUrl === null) {
      this.setBaseUrl(this.defineBaseUrl());
    }
    return this._baseUrl;
  }

  setBaseUrl(value) {
    this._baseUrl = value;
    return this;
  }

  getBaseOptions() {
    return {
      baseUrl: this.getBaseUrl(),
      jar: true,
      followAllRedirects: true,
    };
  }
}

module.exports = RcGen;
