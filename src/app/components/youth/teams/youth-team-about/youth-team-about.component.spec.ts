import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthTeamAboutComponent } from './youth-team-about.component';

describe('YouthTeamAboutComponent', () => {
  let component: YouthTeamAboutComponent;
  let fixture: ComponentFixture<YouthTeamAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthTeamAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthTeamAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
