import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocreportComponent } from './ad-hocreport.component';

describe('AdHocreportComponent', () => {
  let component: AdHocreportComponent;
  let fixture: ComponentFixture<AdHocreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHocreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
