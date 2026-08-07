import { Routes } from '@angular/router';
import { Cliente } from './cliente/cliente';
import { Proveedor } from './proveedor/proveedor';
import { Producto } from './producto/producto'; 
import { DetalleFactura } from './detalle-factura/detalle-factura';
import { Factura } from './factura/factura';
import { Formproveedor } from './formproveedor/formproveedor';

export const routes: Routes = [
    {path: 'cliente', component: Cliente},
    {path: 'proveedor', component: Proveedor},
    {path: 'factura', component: Factura},
    {path: 'producto', component: Producto},
    {path: 'detalle-factura', component: DetalleFactura},
    {path: 'formproveedor', component: Formproveedor},

];
