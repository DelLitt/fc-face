import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsViewComponent } from './medics-view.component';

describe('MedicsViewComponent', () => {
  let component: MedicsViewComponent;
  let fixture: ComponentFixture<MedicsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
