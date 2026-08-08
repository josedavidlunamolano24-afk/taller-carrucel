import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizarproducto } from './actualizarproducto';

describe('Actualizarproducto', () => {
  let component: Actualizarproducto;
  let fixture: ComponentFixture<Actualizarproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualizarproducto],
    }).compileComponents();

    fixture = TestBed.createComponent(Actualizarproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
