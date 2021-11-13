import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedataComponent } from './feedata.component';

describe('FeedataComponent', () => {
  let component: FeedataComponent;
  let fixture: ComponentFixture<FeedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
