import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthTeamResultsComponent } from './youth-team-results.component';

describe('YouthTeamResultsComponent', () => {
  let component: YouthTeamResultsComponent;
  let fixture: ComponentFixture<YouthTeamResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthTeamResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthTeamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
