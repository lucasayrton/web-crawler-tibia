const path = require('path');
const { loadHtmlFile } = require('./../../src/utils/file');
const AdpHtmlTibia = require('./../../src/adapter/AdpHtmlTibia');

const dirTestFile = file => path.resolve(__dirname, '..', '..', 'examples', file);

describe('AdpHtmlTibiaBosses', () => {
  it('getWorlds', async () => {
    const html = await loadHtmlFile(dirTestFile('kill-statistics.html'));
    const result = AdpHtmlTibia.getWorlds(html);
    expect(result.length).toBeGreaterThan(0);
  });
});
