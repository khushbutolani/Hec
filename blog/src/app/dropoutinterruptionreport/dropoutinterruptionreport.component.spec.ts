import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoutinterruptionreportComponent } from './dropoutinterruptionreport.component';

describe('DropoutinterruptionreportComponent', () => {
  let component: DropoutinterruptionreportComponent;
  let fixture: ComponentFixture<DropoutinterruptionreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropoutinterruptionreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoutinterruptionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
