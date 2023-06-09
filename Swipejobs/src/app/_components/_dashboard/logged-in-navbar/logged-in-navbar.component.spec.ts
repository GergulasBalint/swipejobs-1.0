import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInNavbarComponent } from './logged-in-navbar.component';

describe('LoggedInNavbarComponent', () => {
  let component: LoggedInNavbarComponent;
  let fixture: ComponentFixture<LoggedInNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
