import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainNavbarComponent } from './app-main-navbar.component';

describe('AppMainNavbarComponent', () => {
  let component: AppMainNavbarComponent;
  let fixture: ComponentFixture<AppMainNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
