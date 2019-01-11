const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const loadHtmlFile = (fullDir, encodding = 'utf8') => readFile(fullDir, encodding);

module.exports = { loadHtmlFile, readFile, writeFile };
