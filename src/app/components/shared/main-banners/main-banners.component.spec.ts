import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBannersComponent } from './main-banners.component';

describe('MainBannersComponent', () => {
  let component: MainBannersComponent;
  let fixture: ComponentFixture<MainBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
