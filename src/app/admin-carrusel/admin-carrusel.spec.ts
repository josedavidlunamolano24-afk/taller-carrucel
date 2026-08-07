import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarrusel } from './admin-carrusel';

describe('AdminCarrusel', () => {
  let component: AdminCarrusel;
  let fixture: ComponentFixture<AdminCarrusel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCarrusel],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCarrusel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
