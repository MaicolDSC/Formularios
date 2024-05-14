import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCosechaComponent } from './registro-cosecha.component';

describe('RegistroCosechaComponent', () => {
  let component: RegistroCosechaComponent;
  let fixture: ComponentFixture<RegistroCosechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCosechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
