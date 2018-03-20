import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneysSelectComponent } from './tourneys-select.component';

describe('TourneysSelectComponent', () => {
  let component: TourneysSelectComponent;
  let fixture: ComponentFixture<TourneysSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourneysSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneysSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
