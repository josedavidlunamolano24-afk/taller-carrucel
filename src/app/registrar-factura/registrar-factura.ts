import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar-factura',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './registrar-factura.html',
  styleUrl: './registrar-factura.css'
})
export class RegistrarFactura {

}