import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

 export interface Producto{
  descripcion: string;
  cod_proveedor: number;
  precio_costo: number;
  precio_venta: number;
  foto: string;
 }

 export interface Proveedor{
  cod_proveedor: number
 }

@Component({
  selector: 'app-formproducto',
  imports: [CommonModule, FormsModule],
  templateUrl: './formproducto.html',
  styleUrl: './formproducto.css',
})
export class Formproducto {
  nuevoProducto: Producto={
  descripcion: '',
  cod_proveedor: 0,
  precio_costo: 0,
  precio_venta: 0,
  foto: ''
  }

  proveedores: Proveedor[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.traerProveedores();}

    traerProveedores(){

    this.http.get<Proveedor[]> ('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedor',
      {     
      headers: {
          apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'

        }
  }).subscribe({
    next:(respuesta)=>{
      console.log(respuesta);
      this.proveedores = respuesta;
    }
  });
  }

  guardarProducto(){
    console.log(this.nuevoProducto)
    this.http.post('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/producto',
      this.nuevoProducto,
      {
        headers: {
          apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization:'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'

        }
      }).subscribe({
        next: (respuesta)=>{
          alert("Prodcuto Guardado Correctamente")
          console.log(respuesta)
        },
        error:(error)=>{
          console.log(error);
          alert("Error al Guardar Producto")
        }
      })
    }
  }
