import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthTeamGamesComponent } from './youth-team-games.component';

describe('YouthTeamGamesComponent', () => {
  let component: YouthTeamGamesComponent;
  let fixture: ComponentFixture<YouthTeamGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthTeamGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthTeamGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
