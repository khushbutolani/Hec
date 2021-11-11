import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClaimComponent } from './input-claim.component';

describe('InputClaimComponent', () => {
  let component: InputClaimComponent;
  let fixture: ComponentFixture<InputClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
