import { Component, ChangeDetectorRef } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Proveedores{
  codigo_proveedor: number,
  nombre_proveedor: string,
  telefono: string,
  direccion: string
}

@Component({
  selector: 'app-proveedor',
  imports: [ CommonModule,RouterLink],
  templateUrl: './proveedor.html',
  styleUrl: './proveedor.css',
})
export class Proveedor {
  
  proveedores: Proveedores[] = []

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private router: Router){}

  ngOnInit() {
    this.traerProveedores()
  }

  traerProveedores(){
    this.http.get<Proveedores[]>("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedor",{
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', 
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
    })
    .subscribe({
      next: (respuesta) => {
        console.log(respuesta)
        this.proveedores = respuesta;
        this.cdr.detectChanges();
      }
    })
  }

  eliminarProveedor(codigo_proveedor: number) {
    this.http.delete<Proveedores[]>("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedor?codigo_proveedor=eq." + codigo_proveedor,{
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', 
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
    })
    .subscribe({
      next: (respuesta) => {
        alert("el proveedor se elimino correctamente" +respuesta + "codigo del Proveedor"+ codigo_proveedor);
        this.traerProveedores();
        this.cdr.detectChanges();
      }
    })

  }

  actualizarProveedor(codigo_proveedor: number) {
    this.router.navigate(['actualizarproveedor', +codigo_proveedor]);
  }
}
