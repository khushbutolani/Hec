import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewClaimscndComponent } from './single-view-claimscnd.component';

describe('SingleViewClaimscndComponent', () => {
  let component: SingleViewClaimscndComponent;
  let fixture: ComponentFixture<SingleViewClaimscndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleViewClaimscndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleViewClaimscndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
