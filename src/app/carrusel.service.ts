import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TarjetaCarrusel {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  private storageKey = 'tarjetas_carrusel_data';

  private tarjetasIniciales: TarjetaCarrusel[] = [
    {
      id: 1,
      imagen: 'carrusel/productosprincipal.jpg',
      titulo: 'Imagen 1',
      descripcion: 'Calidad y buen servicio con todos nuestros servicios.'
    },
    {
      id: 2,
      imagen: 'carrusel/brillo.jpg',
      titulo: 'Imagen 2',
      descripcion: 'Dale brillo por muy viejo que este.'
    },
    {
      id: 3,
      imagen: 'carrusel/dentro.jpg',
      titulo: 'Imagen 3',
      descripcion: 'la vida de tu pasta es como la de tu lamina.'
    },
    {
      id: 4,
      imagen: 'carrusel/llantas.jpg',
      titulo: 'Imagen 4',
      descripcion: 'Porque las llantas tambien lo merecen.'
    },
    {
      id: 5,
      imagen: 'carrusel/rayones.jpg',
      titulo: 'Imagen 5',
      descripcion: 'Quita de tu vehículo los rayones y arañazos y vuélvelo a dejar como NUEVO.'
    }
  ];

  private tarjetasSubject = new BehaviorSubject<TarjetaCarrusel[]>(this.cargarDeStorage());

  getTarjetas$(): Observable<TarjetaCarrusel[]> {
    return this.tarjetasSubject.asObservable();
  }

  private cargarDeStorage(): TarjetaCarrusel[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : this.tarjetasIniciales;
  }

  private guardarEnStorage(tarjetas: TarjetaCarrusel[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tarjetas));
    this.tarjetasSubject.next([...tarjetas]);
  }

  agregarTarjeta(nuevaTarjeta: Omit<TarjetaCarrusel, 'id'>) {
    const actuales = this.tarjetasSubject.value;
    const id = actuales.length > 0 ? Math.max(...actuales.map(t => t.id)) + 1 : 1;
    const creadas = [...actuales, { id, ...nuevaTarjeta }];
    this.guardarEnStorage(creadas);
  }

  actualizarTarjeta(tarjetaEditada: TarjetaCarrusel) {
    const actuales = this.tarjetasSubject.value;
    const index = actuales.findIndex(t => t.id === tarjetaEditada.id);
    if (index !== -1) {
      actuales[index] = tarjetaEditada;
      this.guardarEnStorage(actuales);
    }
  }

  eliminarTarjeta(id: number) {
    const filtradas = this.tarjetasSubject.value.filter(t => t.id !== id);
    this.guardarEnStorage(filtradas);
  }
}