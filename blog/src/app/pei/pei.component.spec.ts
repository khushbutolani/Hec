import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEIComponent } from './pei.component';

describe('PEIComponent', () => {
  let component: PEIComponent;
  let fixture: ComponentFixture<PEIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PEIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
