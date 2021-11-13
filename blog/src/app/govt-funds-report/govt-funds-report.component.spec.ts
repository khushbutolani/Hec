import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtFundsReportComponent } from './govt-funds-report.component';

describe('GovtFundsReportComponent', () => {
  let component: GovtFundsReportComponent;
  let fixture: ComponentFixture<GovtFundsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtFundsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtFundsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
