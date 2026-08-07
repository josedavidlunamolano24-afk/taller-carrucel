import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formproveedor } from './formproveedor';

describe('Formproveedor', () => {
  let component: Formproveedor;
  let fixture: ComponentFixture<Formproveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formproveedor],
    }).compileComponents();

    fixture = TestBed.createComponent(Formproveedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
