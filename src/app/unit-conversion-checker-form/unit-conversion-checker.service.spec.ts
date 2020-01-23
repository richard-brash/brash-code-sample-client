import { TestBed } from '@angular/core/testing';

import { UnitConversionCheckerService } from './unit-conversion-checker.service';

describe('UnitConversionCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitConversionCheckerService = TestBed.get(UnitConversionCheckerService);
    expect(service).toBeTruthy();
  });
});
