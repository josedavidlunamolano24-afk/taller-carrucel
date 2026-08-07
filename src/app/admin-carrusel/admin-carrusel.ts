import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarruselService, TarjetaCarrusel } from '../carrusel.service';

@Component({
  selector: 'app-admin-carrusel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-carrusel.html',
  styleUrl: './admin-carrusel.css'
})
export class AdminCarrusel implements OnInit {

  tarjetas: TarjetaCarrusel[] = [];
  editando = false;

  formTarjeta: TarjetaCarrusel = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: ''
  };

  constructor(private carruselService: CarruselService) {}

  ngOnInit() {
    this.carruselService.getTarjetas$().subscribe(data => {
      this.tarjetas = data;
    });
  }

  guardar() {
    if (!this.formTarjeta.titulo || !this.formTarjeta.descripcion || !this.formTarjeta.imagen) {
      alert('Por favor completa todos los campos.');
      return;
    }

    if (this.editando) {
      this.carruselService.actualizarTarjeta(this.formTarjeta);
    } else {
      this.carruselService.agregarTarjeta({
        titulo: this.formTarjeta.titulo,
        descripcion: this.formTarjeta.descripcion,
        imagen: this.formTarjeta.imagen
      });
    }

    this.limpiarFormulario();
  }

  seleccionarParaEditar(tarjeta: TarjetaCarrusel) {
    this.editando = true;
    this.formTarjeta = { ...tarjeta };
  }

  eliminar(id: number) {
    if (confirm('¿Deseas eliminar esta tarjeta del carrusel?')) {
      this.carruselService.eliminarTarjeta(id);
    }
  }

  limpiarFormulario() {
    this.editando = false;
    this.formTarjeta = { id: 0, titulo: '', descripcion: '', imagen: '' };
  }
}