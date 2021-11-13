import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepancydataComponent } from './discrepancydata.component';

describe('DiscrepancydataComponent', () => {
  let component: DiscrepancydataComponent;
  let fixture: ComponentFixture<DiscrepancydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscrepancydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscrepancydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
