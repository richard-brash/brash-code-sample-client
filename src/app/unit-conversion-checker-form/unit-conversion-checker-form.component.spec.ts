import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConversionCheckerFormComponent } from './unit-conversion-checker-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('UnitConversionCheckerFormComponent', () => {
  let component: UnitConversionCheckerFormComponent;
  let fixture: ComponentFixture<UnitConversionCheckerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule],      
      declarations: [ UnitConversionCheckerFormComponent ],
      providers: [
        HttpClientModule
      ]      
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
