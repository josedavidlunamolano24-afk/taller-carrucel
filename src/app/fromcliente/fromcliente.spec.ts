import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fromcliente } from './fromcliente';

describe('Fromcliente', () => {
  let component: Fromcliente;
  let fixture: ComponentFixture<Fromcliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fromcliente],
    }).compileComponents();

    fixture = TestBed.createComponent(Fromcliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
