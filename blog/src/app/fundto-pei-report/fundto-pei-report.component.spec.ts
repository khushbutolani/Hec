import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtoPeiReportComponent } from './fundto-pei-report.component';

describe('FundtoPeiReportComponent', () => {
  let component: FundtoPeiReportComponent;
  let fixture: ComponentFixture<FundtoPeiReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundtoPeiReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundtoPeiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
