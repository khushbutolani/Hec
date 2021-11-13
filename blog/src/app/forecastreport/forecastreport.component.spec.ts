import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastreportComponent } from './forecastreport.component';

describe('ForecastreportComponent', () => {
  let component: ForecastreportComponent;
  let fixture: ComponentFixture<ForecastreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
