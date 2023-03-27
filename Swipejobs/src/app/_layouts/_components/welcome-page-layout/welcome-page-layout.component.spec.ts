import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageLayoutComponent } from './welcome-page-layout.component';

describe('WelcomePageLayoutComponent', () => {
  let component: WelcomePageLayoutComponent;
  let fixture: ComponentFixture<WelcomePageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
