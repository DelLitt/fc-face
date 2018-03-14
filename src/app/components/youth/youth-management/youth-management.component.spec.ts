import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthManagementComponent } from './youth-management.component';

describe('YouthManagementComponent', () => {
  let component: YouthManagementComponent;
  let fixture: ComponentFixture<YouthManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
