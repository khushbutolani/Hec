import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryreportComponent } from './dispensaryreport.component';

describe('DispensaryreportComponent', () => {
  let component: DispensaryreportComponent;
  let fixture: ComponentFixture<DispensaryreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensaryreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensaryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
