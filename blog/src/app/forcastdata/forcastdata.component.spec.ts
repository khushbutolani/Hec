import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastdataComponent } from './forcastdata.component';

describe('ForcastdataComponent', () => {
  let component: ForcastdataComponent;
  let fixture: ComponentFixture<ForcastdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
