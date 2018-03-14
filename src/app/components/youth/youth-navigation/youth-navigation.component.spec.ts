import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthNavigationComponent } from './youth-navigation.component';

describe('YouthNavigationComponent', () => {
  let component: YouthNavigationComponent;
  let fixture: ComponentFixture<YouthNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
