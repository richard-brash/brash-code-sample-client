import { UnitConversionChecker } from './unit-conversion-checker';

describe('UnitConversionChecker', () => {
  it('should create an instance', () => {
    expect(new UnitConversionChecker("",0, "", 0)).toBeTruthy();
  });
});
