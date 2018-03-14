import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthHomeComponent } from './youth-home.component';

describe('YouthHomeComponent', () => {
  let component: YouthHomeComponent;
  let fixture: ComponentFixture<YouthHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
