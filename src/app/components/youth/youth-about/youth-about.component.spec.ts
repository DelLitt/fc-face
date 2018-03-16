import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthAboutComponent } from './youth-about.component';

describe('YouthAboutComponent', () => {
  let component: YouthAboutComponent;
  let fixture: ComponentFixture<YouthAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
