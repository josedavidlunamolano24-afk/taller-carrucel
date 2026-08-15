import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface DetalleFactura{
  id: number;
  no_factura: number;
  cod_producto: number;
  cantidad_pedida: number;
  precio_total: number;
}

@Component({
  selector: 'app-detalle-factura',
  imports: [ CommonModule],
  templateUrl: './detalle-factura.html',
  styleUrl: './detalle-factura.css',
})
export class DetalleFactura {

  detalles : DetalleFactura[]=[];
  constructor(private http:HttpClient, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.traerDetalles();
  }

  traerDetalles(){
    this.http.get<DetalleFactura[]>('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/detalle_factura',
  {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
  }).subscribe({next : (respuesta) => {
    console.log(respuesta);
    this.detalles = respuesta;
    this.cdr.detectChanges();
  }

  })
  }
}
