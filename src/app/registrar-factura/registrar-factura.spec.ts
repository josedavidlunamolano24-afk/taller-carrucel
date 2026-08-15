import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFactura } from './registrar-factura';

describe('RegistrarFactura', () => {
  let component: RegistrarFactura;
  let fixture: ComponentFixture<RegistrarFactura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarFactura],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarFactura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
