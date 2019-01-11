const path = require('path');
const { writeFile, loadHtmlFile } = require('./../../src/utils/file');
const AdpHtmlTibiaBosses = require('./../../src/adapter/AdpHtmlTibiaBosses');

const dirTestFile = file => path.resolve(__dirname, '..', '..', 'examples', file);

describe('AdpHtmlTibiaBosses', () => {
  it('isLogged', async () => {
    const html = await loadHtmlFile(dirTestFile('logged.html'));
    expect(AdpHtmlTibiaBosses.isLogged(html)).toBe(true);
  });

  it('extractUrlLogout', async () => {
    const html = await loadHtmlFile(dirTestFile('logged.html'));
    expect(AdpHtmlTibiaBosses.extractUrlLogout(html)).not.toBe(null);
  });

  it('getHistory', async () => {
    const html = await loadHtmlFile(dirTestFile('history.html'));
    const result = AdpHtmlTibiaBosses.getHistory(html);
    await writeFile(
      path.resolve(
        __dirname,
        '..',
        '..',
        'log',
        `AdpHtmlTibiaBosses-getHistory-${Date.now()}.json`,
      ),
      JSON.stringify(result),
      'utf8',
    );
    expect(result.length).not.toBe(0);
  });
});
