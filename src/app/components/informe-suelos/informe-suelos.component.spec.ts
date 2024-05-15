import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeSuelosComponent } from './informe-suelos.component';

describe('InformeSuelosComponent', () => {
  let component: InformeSuelosComponent;
  let fixture: ComponentFixture<InformeSuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeSuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeSuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
