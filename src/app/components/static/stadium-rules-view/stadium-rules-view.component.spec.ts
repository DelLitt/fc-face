import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumRulesViewComponent } from './stadium-rules-view.component';

describe('StadiumRulesViewComponent', () => {
  let component: StadiumRulesViewComponent;
  let fixture: ComponentFixture<StadiumRulesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumRulesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumRulesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
