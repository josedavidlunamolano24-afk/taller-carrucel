import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FacturaService } from '../factura.service';

export interface FacturaRequest {
  fecha: string;
  cod_cliente: number;
  total_factura: number;
}

@Component({
  selector: 'app-registrar-factura',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './registrar-factura.html',
  styleUrl: './registrar-factura.css'
})
export class RegistrarFactura {

  private facturaService = inject(FacturaService);
  private router = inject(Router);

  factura = {
    fecha: '',
    cod_cliente: null as number | null,
    total_factura: null as number | null
  };

  cargando = false;
  error = '';
  mensaje = '';

  guardarFactura(): void {
    this.error = '';
    this.mensaje = '';

    if (
      !this.factura.fecha ||
      this.factura.cod_cliente === null ||
      this.factura.total_factura === null
    ) {
      this.error = 'Por favor completa todos los campos.';
      return;
    }

    const nuevaFactura: FacturaRequest = {
      fecha: this.factura.fecha,
      cod_cliente: this.factura.cod_cliente,
      total_factura: this.factura.total_factura
    };

    this.cargando = true;

    this.facturaService.registrarFactura(nuevaFactura).subscribe({
      next: () => {
        this.cargando = false;
        this.mensaje = 'Factura registrada correctamente. Redirigiendo...';

        setTimeout(() => {
          this.router.navigate(['/factura']);
        }, 1500);
      },

      error: (err) => {
        console.error('Error al registrar factura:', err);
        this.cargando = false;
        this.error =
          err.error?.message ||
          err.error?.details ||
          err.error?.hint ||
          'No fue posible registrar la factura.';
      }
    });
  }
}