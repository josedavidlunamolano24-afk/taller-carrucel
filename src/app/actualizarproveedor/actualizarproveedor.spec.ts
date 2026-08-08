import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizarproveedor } from './actualizarproveedor';

describe('Actualizarproveedor', () => {
  let component: Actualizarproveedor;
  let fixture: ComponentFixture<Actualizarproveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualizarproveedor],
    }).compileComponents();

    fixture = TestBed.createComponent(Actualizarproveedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
