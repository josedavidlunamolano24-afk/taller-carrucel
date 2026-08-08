import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface Producto {
  codigo_producto: number;
  descripcion: string;
  cod_proveedor: number;
  precio_costo: number;
  precio_venta: number;
  foto: string;
}

@Component({
  selector: 'app-actualizarproducto',
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizarproducto.html',
  styleUrl: './actualizarproducto.css',
})
export class Actualizarproducto {

  @Input() producto!: Producto;
  
  @Output() cerrar = new EventEmitter<void>();
  
  @Output() actualizado = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  actualizarProducto() {
    this.http.patch(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/producto?codigo_producto=eq.${this.producto.codigo_producto}`,
      {
        descripcion: this.producto.descripcion,
        cod_proveedor: this.producto.cod_proveedor,
        precio_costo: this.producto.precio_costo,
        precio_venta: this.producto.precio_venta,
        foto: this.producto.foto
      },
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    )
    .subscribe({
      next: (respuesta) => {
        alert("Producto actualizado correctamente");
        console.log(respuesta);
   
        this.actualizado.emit();
   
        this.cerrar.emit();
      },
      error: (error) => {
        console.log(error);
        alert("Error al actualizar el producto");
      }
    });
  }
  cerrarModal() {
    this.cerrar.emit();
  }

}