import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailfstComponent } from './studentdetailfst.component';

describe('StudentdetailfstComponent', () => {
  let component: StudentdetailfstComponent;
  let fixture: ComponentFixture<StudentdetailfstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdetailfstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailfstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
