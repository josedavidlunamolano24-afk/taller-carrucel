import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselService, TarjetaCarrusel } from '../carrusel.service';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css'
})
export class Carrusel implements OnInit {

  slideActual = 0;
  tarjetasVisibles = 4;
  tarjetasCarrusel: TarjetaCarrusel[] = [];

  resumen = [
    { icono: '📄', titulo: 'Facturas', valor: '128', texto: 'Este mes', porcentaje: '12%' },
    { icono: '📦', titulo: 'Productos', valor: '320', texto: 'Activos', porcentaje: '5%' },
    { icono: '👤', titulo: 'Clientes', valor: '85', texto: 'Este mes', porcentaje: '8%' },
    { icono: '🏢', titulo: 'Proveedores', valor: '42', texto: 'Activos', porcentaje: '3%' }
  ];

  constructor(private carruselService: CarruselService) {}

  ngOnInit() {
    // Escucha en tiempo real si agregas, editas o borras tarjetas desde el Admin
    this.carruselService.getTarjetas$().subscribe(data => {
      this.tarjetasCarrusel = data;

      // Reajusta la posición si se eliminan tarjetas y quedamos fuera de rango
      if (this.slideActual > this.maxSlide) {
        this.slideActual = this.maxSlide;
      }
    });
  }

  get totalPuntos(): number[] {
    const cantidadPuntos = Math.max(1, this.tarjetasCarrusel.length - this.tarjetasVisibles + 1);
    return Array(cantidadPuntos).fill(0);
  }

  get maxSlide(): number {
    return Math.max(0, this.tarjetasCarrusel.length - this.tarjetasVisibles);
  }

  siguiente() {
    if (this.slideActual < this.maxSlide) {
      this.slideActual++;
    } else {
      this.slideActual = 0;
    }
  }

  anterior() {
    if (this.slideActual > 0) {
      this.slideActual--;
    } else {
      this.slideActual = this.maxSlide;
    }
  }

  irAlSlide(index: number) {
    this.slideActual = index;
  }

  getTransform(): string {
    return `translateX(calc(-${this.slideActual} * (25% + 3.75px)))`;
  }
}