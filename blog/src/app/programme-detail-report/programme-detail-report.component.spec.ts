import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDetailReportComponent } from './programme-detail-report.component';

describe('ProgrammeDetailReportComponent', () => {
  let component: ProgrammeDetailReportComponent;
  let fixture: ComponentFixture<ProgrammeDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
