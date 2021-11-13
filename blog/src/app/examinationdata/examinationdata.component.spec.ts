import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationdataComponent } from './examinationdata.component';

describe('ExaminationdataComponent', () => {
  let component: ExaminationdataComponent;
  let fixture: ComponentFixture<ExaminationdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
