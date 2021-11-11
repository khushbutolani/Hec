import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFacilityComponent } from './help-facility.component';

describe('HelpFacilityComponent', () => {
  let component: HelpFacilityComponent;
  let fixture: ComponentFixture<HelpFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
