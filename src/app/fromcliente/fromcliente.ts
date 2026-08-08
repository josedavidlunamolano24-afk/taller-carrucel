import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-fromcliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './fromcliente.html',
  styleUrl: './fromcliente.css',
})
export class Fromcliente {

  nuevoCliente = {
    nit: '',
    nombre: '',
    telefono: '',
    direccion: '',

  }

  constructor(private http: HttpClient){

  }

  guardarCliente(){
    this.http.post("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente", this.nuevoCliente,
    {
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', 
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
    })
    .subscribe({
      next: (respuesta) => {
        alert('El usuario se guardo correctamente')
      }
    })

  }




}
