import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesViewComponent } from './coaches-view.component';

describe('CoachesViewComponent', () => {
  let component: CoachesViewComponent;
  let fixture: ComponentFixture<CoachesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
