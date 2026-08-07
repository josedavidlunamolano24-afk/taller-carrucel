import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formproducto } from './formproducto';

describe('Formproducto', () => {
  let component: Formproducto;
  let fixture: ComponentFixture<Formproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formproducto],
    }).compileComponents();

    fixture = TestBed.createComponent(Formproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
