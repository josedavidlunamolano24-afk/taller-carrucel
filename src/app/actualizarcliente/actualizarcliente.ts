import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizarcliente',
  imports: [ FormsModule],
  templateUrl: './actualizarcliente.html',
  styleUrl: './actualizarcliente.css',
})
export class Actualizarcliente {
  cod_cliente: number = 0;

  client = {
    nit: '',
    nombre: '',
    telefono: '',
    direccion: '',
  };

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute ) {}

  ngOnInit(){
    this.cod_cliente= this.route.snapshot.params['cod_cliente']
  }

  actualizarClient(){
    this.http.patch("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente?cod_cliente=eq." +this.cod_cliente, this.client, {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', 
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
    })
    .subscribe({
      next: (respuesta) => {
        alert("el cliente se actualizo correctamente" +respuesta);
        this.router.navigate(['/cliente']);
      }
    })

  }


}
