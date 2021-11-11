import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeiHomeComponent } from './new-pei-home.component';

describe('NewPeiHomeComponent', () => {
  let component: NewPeiHomeComponent;
  let fixture: ComponentFixture<NewPeiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPeiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
