import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainNavigationComponent } from './app-main-navigation.component';

describe('AppMainNavigationComponent', () => {
  let component: AppMainNavigationComponent;
  let fixture: ComponentFixture<AppMainNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
