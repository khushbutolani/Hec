import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatdataComponent } from './repeatdata.component';

describe('RepeatdataComponent', () => {
  let component: RepeatdataComponent;
  let fixture: ComponentFixture<RepeatdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
