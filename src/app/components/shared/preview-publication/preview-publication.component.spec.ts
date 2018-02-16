import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPublicationComponent } from './preview-publication.component';

describe('PreviewPublicationComponent', () => {
  let component: PreviewPublicationComponent;
  let fixture: ComponentFixture<PreviewPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
