import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewClaimfstComponent } from './single-view-claimfst.component';

describe('SingleViewClaimfstComponent', () => {
  let component: SingleViewClaimfstComponent;
  let fixture: ComponentFixture<SingleViewClaimfstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleViewClaimfstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleViewClaimfstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
