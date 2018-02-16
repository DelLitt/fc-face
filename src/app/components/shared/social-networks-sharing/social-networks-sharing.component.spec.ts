import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksSharingComponent } from './social-networks-sharing.component';

describe('SocialNetworksSharingComponent', () => {
  let component: SocialNetworksSharingComponent;
  let fixture: ComponentFixture<SocialNetworksSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworksSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworksSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
