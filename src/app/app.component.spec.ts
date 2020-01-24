import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UnitConversionCheckerFormComponent } from './unit-conversion-checker-form/unit-conversion-checker-form.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UnitConversionCheckerFormComponent,
      ],
      imports: [
        FormsModule
      ],
      providers: [
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'brash-code-challenge-client'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('brash-code-challenge-client');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('brash-code-challenge-client app is running!');
  // });
});
