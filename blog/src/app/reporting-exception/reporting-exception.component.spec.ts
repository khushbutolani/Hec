import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingExceptionComponent } from './reporting-exception.component';

describe('ReportingExceptionComponent', () => {
  let component: ReportingExceptionComponent;
  let fixture: ComponentFixture<ReportingExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
