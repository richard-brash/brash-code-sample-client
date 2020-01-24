import { TestBed } from '@angular/core/testing';

import { UnitConversionCheckerService } from './unit-conversion-checker.service';
import { HttpClientModule } from '@angular/common/http';

describe('UnitConversionCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],

    providers: [
      UnitConversionCheckerService,
      HttpClientModule
    ]    
  }));

  it('should be created', () => {
    const service: UnitConversionCheckerService = TestBed.get(UnitConversionCheckerService);
    expect(service).toBeTruthy();
  });
});
