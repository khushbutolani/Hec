import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocDataComponent } from './adhoc-data.component';

describe('AdhocDataComponent', () => {
  let component: AdhocDataComponent;
  let fixture: ComponentFixture<AdhocDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhocDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
