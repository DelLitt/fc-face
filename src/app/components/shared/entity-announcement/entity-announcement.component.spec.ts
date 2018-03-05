import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAnnouncementComponent } from './entity-announcement.component';

describe('EntityAnnouncementComponent', () => {
  let component: EntityAnnouncementComponent;
  let fixture: ComponentFixture<EntityAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
