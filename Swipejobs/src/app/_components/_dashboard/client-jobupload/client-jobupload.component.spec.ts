import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobuploadComponent } from './client-jobupload.component';

describe('ClientJobuploadComponent', () => {
  let component: ClientJobuploadComponent;
  let fixture: ComponentFixture<ClientJobuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientJobuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientJobuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
