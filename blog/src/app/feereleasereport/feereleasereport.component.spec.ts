import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeereleasereportComponent } from './feereleasereport.component';

describe('FeereleasereportComponent', () => {
  let component: FeereleasereportComponent;
  let fixture: ComponentFixture<FeereleasereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeereleasereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeereleasereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
