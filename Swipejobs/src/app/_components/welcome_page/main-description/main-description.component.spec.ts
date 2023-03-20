import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDescriptionComponent } from './main-description.component';

describe('MainDescriptionComponent', () => {
  let component: MainDescriptionComponent;
  let fixture: ComponentFixture<MainDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
