import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBreadcrumbComponent } from './global-breadcrumb.component';

describe('GlobalBreadcrumbComponent', () => {
  let component: GlobalBreadcrumbComponent;
  let fixture: ComponentFixture<GlobalBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
