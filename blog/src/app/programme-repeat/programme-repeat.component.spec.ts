import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeRepeatComponent } from './programme-repeat.component';

describe('ProgrammeRepeatComponent', () => {
  let component: ProgrammeRepeatComponent;
  let fixture: ComponentFixture<ProgrammeRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeRepeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
