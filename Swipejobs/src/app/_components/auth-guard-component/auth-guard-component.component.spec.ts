import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardComponentComponent } from './auth-guard-component.component';

describe('AuthGuardComponentComponent', () => {
  let component: AuthGuardComponentComponent;
  let fixture: ComponentFixture<AuthGuardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthGuardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthGuardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
