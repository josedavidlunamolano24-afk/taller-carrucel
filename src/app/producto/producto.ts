import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  imports: [ CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  productos: Producto[] = [];

  constructor(private http:HttpClient,
              private cdr: ChangeDetectorRef
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
    eliminar(codigo:number){}
    llevarActualizar(codigo:number){}
  }

