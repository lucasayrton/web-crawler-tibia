const cheerio = require('cheerio');
const capitalize = require('./../utils/capitalize');

/* eslint class-methods-use-this: ["error", { "exceptMethods":
["getWorlds"] }] */

class AdpHtmlTibia {
  getKillStatistics(html) {
    const $ = cheerio.load(html);
    const content = $(
      '.BoxContent > form:nth-child(1) > table:nth-child(4) > tbody > tr+tr~tr~tr:not(:last-child)',
    );
    if (!content.length) throw new Error("Can't get the options of worlds");
    const data = [];
    content.each((index, tr) => {
      const name = capitalize(tr.children[0].children[0].data.trim());
      const death = tr.children[2].children[0].data.trim();
      if (name !== '') {
        data.push({ name, death });
      }
    });
    return data;
  }
}

module.exports = new AdpHtmlTibia();
