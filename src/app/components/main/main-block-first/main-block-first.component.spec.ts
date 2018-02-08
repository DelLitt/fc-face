import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlockFirstComponent } from './main-block-first.component';

describe('MainBlockFirstComponent', () => {
  let component: MainBlockFirstComponent;
  let fixture: ComponentFixture<MainBlockFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBlockFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBlockFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
