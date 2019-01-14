const BoImportation = require('./../../src/bo/BoImportation');

describe('AdpHtmlTibiaBosses', () => {
  it('getWorlds', async () => {
    const result = await BoImportation.importStatisticsFromWorldByName('Inabra');
    expect(result.length).toBeGreaterThan(0);
  });
});
