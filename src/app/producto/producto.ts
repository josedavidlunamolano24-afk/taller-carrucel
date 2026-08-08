import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Actualizarproducto } from '../actualizarproducto/actualizarproducto';

 export interface Producto{
  codigo_producto: number,
  descripcion: string,
  cod_proveedor: number,
  precio_costo: number,
  precio_venta: number,
  foto: string,
 }

@Component({
  selector: 'app-producto',
  imports: [ CommonModule, RouterLink, Actualizarproducto],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  productos: Producto[] = [];

  productoSeleccionado: Producto | null = null;

  constructor(private http:HttpClient,
              private cdr: ChangeDetectorRef,
              private router:Router
  ){}
  ngOnInit(){
    this.traerProductos();
  }
  traerProductos(){
    this.http.get<Producto[]> ('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/producto',
      {
        headers:{
          apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type':'application/json'
        }
      }).subscribe({
        next: (respuesta)=>{
          console.log(respuesta);
          this.productos = respuesta;
          this.cdr.detectChanges();
        }
      })
    }
    eliminar(id:number){

      this.http.delete('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/producto?id=eq.'+id,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({
      next:(respuesta) => {
        alert("Registro Eliminado " + respuesta+id)
        this.traerProductos();
        this.cdr.detectChanges();

      }
      })
    }
    llevarActualizar(codigo: number) {
    const producto = this.productos.find(
      producto => producto.codigo_producto === codigo
    );
    if (producto) {
      this.productoSeleccionado = producto;
    }
  }
  cerrarActualizar() {
    this.productoSeleccionado = null;
  }

  productoActualizado() {
    this.traerProductos();
  }
}


