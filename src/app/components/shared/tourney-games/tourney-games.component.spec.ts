import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneyGamesComponent } from './tourney-games.component';

describe('TourneyGamesComponent', () => {
  let component: TourneyGamesComponent;
  let fixture: ComponentFixture<TourneyGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourneyGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneyGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
