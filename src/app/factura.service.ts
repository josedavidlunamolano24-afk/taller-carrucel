import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Factura {
  no_factura: number;
  fecha: string;
  cod_cliente: number;
  total_factura: number;
}

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private http = inject(HttpClient);

  private readonly url =
    'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura';

  private readonly apiKey =
    'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x';

  private readonly headers = new HttpHeaders({
    'apikey': this.apiKey,
    'Authorization': `Bearer ${this.apiKey}`,
    'Content-Type': 'application/json'
  });

  obtenerFacturas(): Observable<Factura[]> {

    return this.http.get<Factura[]>(
      this.url,
      {
        headers: this.headers
      }
    );
  }
}