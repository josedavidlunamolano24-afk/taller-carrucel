import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedor',
  imports: [ CommonModule,RouterLink],
  templateUrl: './proveedor.html',
  styleUrl: './proveedor.css',
})
export class Proveedor {

proveedores: any []=[]
idSeleccionado: number | null = null;

constructor(private router:Router){}
ngOnInit():void{}
seleccionarFila(id: number) {
    this.idSeleccionado = id;
  }

 actualizarProveedor() {
  this.router.navigate(['/formproveedor', this.idSeleccionado]);
  
}

eliminarProveedor() {

 }
}
