import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunddataComponent } from './funddata.component';

describe('FunddataComponent', () => {
  let component: FunddataComponent;
  let fixture: ComponentFixture<FunddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
