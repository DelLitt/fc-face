import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSponsorsComponent } from './global-sponsors.component';

describe('GlobalSponsorsComponent', () => {
  let component: GlobalSponsorsComponent;
  let fixture: ComponentFixture<GlobalSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
