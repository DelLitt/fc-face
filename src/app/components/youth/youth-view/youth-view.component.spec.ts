import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthViewComponent } from './youth-view.component';

describe('YouthViewComponent', () => {
  let component: YouthViewComponent;
  let fixture: ComponentFixture<YouthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
