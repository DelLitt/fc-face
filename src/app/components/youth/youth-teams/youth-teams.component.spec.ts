import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthTeamsComponent } from './youth-teams.component';

describe('YouthTeamsComponent', () => {
  let component: YouthTeamsComponent;
  let fixture: ComponentFixture<YouthTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
