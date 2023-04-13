import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInMainpageComponent } from './logged-in-mainpage.component';

describe('LoggedInMainpageComponent', () => {
  let component: LoggedInMainpageComponent;
  let fixture: ComponentFixture<LoggedInMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInMainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
