import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedataComponent } from './customizedata.component';

describe('CustomizedataComponent', () => {
  let component: CustomizedataComponent;
  let fixture: ComponentFixture<CustomizedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
