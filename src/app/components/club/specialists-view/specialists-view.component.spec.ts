import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsViewComponent } from './specialists-view.component';

describe('SpecialistsViewComponent', () => {
  let component: SpecialistsViewComponent;
  let fixture: ComponentFixture<SpecialistsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
