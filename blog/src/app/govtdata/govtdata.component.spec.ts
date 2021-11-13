import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtdataComponent } from './govtdata.component';

describe('GovtdataComponent', () => {
  let component: GovtdataComponent;
  let fixture: ComponentFixture<GovtdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
