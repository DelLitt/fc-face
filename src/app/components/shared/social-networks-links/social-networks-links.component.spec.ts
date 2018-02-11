import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksLinksComponent } from './social-networks-links.component';

describe('SocialNetworksLinksComponent', () => {
  let component: SocialNetworksLinksComponent;
  let fixture: ComponentFixture<SocialNetworksLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworksLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworksLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
