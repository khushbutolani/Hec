import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoutdataComponent } from './dropoutdata.component';

describe('DropoutdataComponent', () => {
  let component: DropoutdataComponent;
  let fixture: ComponentFixture<DropoutdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropoutdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoutdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
