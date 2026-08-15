import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  FacturaService,
  Factura as FacturaModel
} from '../factura.service';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './factura.html',
  styleUrl: './factura.css',
})
export class Factura implements OnInit {

  private facturaService = inject(FacturaService);
  private cdr = inject(ChangeDetectorRef);

  facturas: FacturaModel[] = [];
  cargando = true;
  error = '';

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas(): void {

    this.cargando = true;
    this.error = '';

    this.facturaService.obtenerFacturas().subscribe({

      next: (respuesta) => {

        console.log('FACTURAS RECIBIDAS:', respuesta);

        this.facturas = respuesta;
        this.cargando = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('ERROR AL CARGAR FACTURAS:', error);

        this.error = 'No se pudieron cargar las facturas.';
        this.cargando = false;

        this.cdr.detectChanges();

      }

    });
  }
}