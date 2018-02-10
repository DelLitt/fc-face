import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcImageSliderNgxComponent } from './fc-image-slider-ngx.component';

describe('FcImageSliderNgxComponent', () => {
  let component: FcImageSliderNgxComponent;
  let fixture: ComponentFixture<FcImageSliderNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcImageSliderNgxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcImageSliderNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
