import { Routes } from '@angular/router';
import { Cliente } from './cliente/cliente';
import { Proveedor } from './proveedor/proveedor';
import { Producto } from './producto/producto';
import { Inicio } from './inicio/inicio';
import { DetalleFactura } from './detalle-factura/detalle-factura';
import { Factura } from './factura/factura';
import { Formproveedor } from './formproveedor/formproveedor';
import { Carrusel } from './carrusel/carrusel';
import { Formproducto } from './formproducto/formproducto';
import { Fromcliente } from './fromcliente/fromcliente';
import { Actualizarcliente } from './actualizarcliente/actualizarcliente';
import { Actualizarproveedor } from './actualizarproveedor/actualizarproveedor';


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
    path: 'proveedor',
    component: Proveedor
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
    path: `formproveedor/:id`,
    component:Formproveedor
  },
  {
    path: 'formproducto',
    component: Formproducto
  },
  {
    path: 'formcliente',
    component: Fromcliente
  },
  {
    path: 'actualizarcliente/:cod_cliente',
    component: Actualizarcliente
  },
  {
    path: 'Actualizarproveedor', component: Actualizarproveedor
  }
];

