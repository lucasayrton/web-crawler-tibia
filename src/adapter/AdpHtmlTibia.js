const cheerio = require('cheerio');

/* eslint class-methods-use-this: ["error", { "exceptMethods":
["getWorlds"] }] */

class AdpHtmlTibia {
  getWorlds(html) {
    const $ = cheerio.load(html);
    const options = $('div#killstatistics select[name=world] option');
    if (!options.length) throw new Error("Can't get the options of worlds");
    const data = [];
    options.each((index, option) => {
      if (option.attribs.value !== '') {
        data.push(option.attribs.value);
      }
    });
    return data;
  }

  getKillStatistics(world, html) {
    const $ = cheerio.load(html);
  }
}

module.exports = new AdpHtmlTibia();
