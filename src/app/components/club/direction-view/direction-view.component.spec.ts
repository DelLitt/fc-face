import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionViewComponent } from './direction-view.component';

describe('DirectionViewComponent', () => {
  let component: DirectionViewComponent;
  let fixture: ComponentFixture<DirectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
