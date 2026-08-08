import { Routes } from '@angular/router';
import { Cliente } from './cliente/cliente';
import { Producto } from './producto/producto';
import { Inicio } from './inicio/inicio';
import { DetalleFactura } from './detalle-factura/detalle-factura';
import { Factura } from './factura/factura';
import { Formproveedor } from './formproveedor/formproveedor';
import { Carrusel } from './carrusel/carrusel';
import { Formproducto } from './formproducto/formproducto';
import { Actualizarcliente } from './actualizarcliente/actualizarcliente';
import { Actualizarproveedor } from './actualizarproveedor/actualizarproveedor';
import { Fromcliente } from './fromcliente/fromcliente';
import { Proveedor } from './proveedor/proveedor';


export const routes: Routes = [

  { 
    path: '', 
    redirectTo: 'inicio', 
    pathMatch: 'full' 
  },

  { 
    path: 'inicio', 
    component: Inicio 
  },

  {
    path: 'carrusel',
    component: Carrusel
  },

  {
    path: 'cliente',
    component: Cliente
  },

  {
    path: 'producto',
    component: Producto
  },

  {
    path: 'factura',
    component: Factura
  },

  {
    path: 'detalle-factura',
    component: DetalleFactura
  },
  {
    path: 'formproducto',
    component: Formproducto
  },
  {
    path: 'actualizarcliente/:cod_cliente',
    component: Actualizarcliente
  },
  {
    path: 'fromcliente', component: Fromcliente
  },
  {
    path: 'Actualizarproveedor', component: Actualizarproveedor
  },

  {
    path: 'formproveedor', component: Formproveedor
  },
  {
    path: 'proveedor', component: Proveedor
  }
  

];

