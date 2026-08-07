//Importarmos el componente carrsuel para poderlo usar en el 
//inicio y de esta manera poder mostrarlo en la pagina de inicio
import { Component } from '@angular/core';
import { Carrusel } from '../carrusel/carrusel';
import { AdminCarrusel } from '../admin-carrusel/admin-carrusel';

@Component({
  selector: 'app-inicio',
  imports: [Carrusel, AdminCarrusel],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
