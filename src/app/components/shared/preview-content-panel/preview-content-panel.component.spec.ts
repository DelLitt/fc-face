import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewContentPanelComponent } from './preview-content-panel.component';

describe('PreviewContentPanelComponent', () => {
  let component: PreviewContentPanelComponent;
  let fixture: ComponentFixture<PreviewContentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewContentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
