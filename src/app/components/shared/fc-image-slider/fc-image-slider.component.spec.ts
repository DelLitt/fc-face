import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcImageSliderComponent } from './fc-image-slider.component';

describe('FcImageSliderComponent', () => {
  let component: FcImageSliderComponent;
  let fixture: ComponentFixture<FcImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
