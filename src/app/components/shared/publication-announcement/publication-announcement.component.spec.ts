import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAnnouncementComponent } from './publication-announcement.component';

describe('EntityAnnouncementComponent', () => {
  let component: PublicationAnnouncementComponent;
  let fixture: ComponentFixture<PublicationAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
