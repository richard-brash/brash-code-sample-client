import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConversionCheckerFormComponent } from './unit-conversion-checker-form.component';

describe('UnitConversionCheckerFormComponent', () => {
  let component: UnitConversionCheckerFormComponent;
  let fixture: ComponentFixture<UnitConversionCheckerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitConversionCheckerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConversionCheckerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
