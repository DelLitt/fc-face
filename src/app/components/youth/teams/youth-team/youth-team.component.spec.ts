import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthTeamComponent } from './youth-team.component';

describe('YouthTeamComponent', () => {
  let component: YouthTeamComponent;
  let fixture: ComponentFixture<YouthTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
