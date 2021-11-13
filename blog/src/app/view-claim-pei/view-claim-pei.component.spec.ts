import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClaimPeiComponent } from './view-claim-pei.component';

describe('ViewClaimPeiComponent', () => {
  let component: ViewClaimPeiComponent;
  let fixture: ComponentFixture<ViewClaimPeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClaimPeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClaimPeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
