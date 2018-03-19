import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthTeamNavigationComponent } from './youth-team-navigation.component';

describe('YouthTeamNavigationComponent', () => {
  let component: YouthTeamNavigationComponent;
  let fixture: ComponentFixture<YouthTeamNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthTeamNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthTeamNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
