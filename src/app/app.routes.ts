import { Routes } from '@angular/router';
import { Cliente } from './cliente/cliente';
import { Proveedor } from './proveedor/proveedor';
import { Producto } from './producto/producto';
import { Inicio} from './inicio/inicio';
import { DetalleFactura } from './detalle-factura/detalle-factura';
import { Factura } from './factura/factura';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: Inicio },
  { path: 'cliente', component: Cliente },
  { path: 'proveedor', component: Proveedor },
  { path: 'factura', component: Factura },
  { path: 'producto', component: Producto },
  { path: 'detalle-factura', component: DetalleFactura },

  { path: '**', redirectTo: 'inicio' }
];
