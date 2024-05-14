import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSiembraComponent } from './registro-siembra.component';

describe('RegistroSiembraComponent', () => {
  let component: RegistroSiembraComponent;
  let fixture: ComponentFixture<RegistroSiembraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSiembraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSiembraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
