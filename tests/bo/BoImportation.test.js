const BoImportation = require('./../../src/bo/BoImportation');

describe('BoImportation', () => {
  it('importStatisticsAllWorld', async () => {
    const result = await BoImportation.importStatisticsAllWorld();
    expect(result).toBe(true);
  });
});
