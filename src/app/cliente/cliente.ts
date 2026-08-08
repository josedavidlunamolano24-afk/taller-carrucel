import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Clientes {
  cod_cliente: number;
  nit: string;
  nombre: string;
  telefono: string;
  direccion: string;

}


@Component({
  selector: 'app-cliente',
  imports: [CommonModule]
,  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {

  cliente: Clientes[] = []

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private router: Router){}

  ngOnInit() {
    this.traerClientes()
  }

  traerClientes(){
    this.http.get<Clientes[]>("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente",{
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', 
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
    })
    .subscribe({
      next: (respuesta) => {
        console.log(respuesta)
        this.cliente = respuesta;
        this.cdr.detectChanges();
      }
    })
  }

  eliminar(cod_cliente: number) {
    this.http.delete<Clientes[]>("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente?cod_cliente=eq." + cod_cliente,{
      headers: {
        apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', 
        Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
        'Content-Type': 'application/json',
      }
    })
    .subscribe({
      next: (respuesta) => {
        alert("el cliente se elimino correctamente" +respuesta + "cod_cliente"+ cod_cliente);
        this.traerClientes();
        this.cdr.detectChanges();
      }
    })

  }

  ActualizarCliente(cod_cliente: number) {
    this.router.navigate(['actualizarcliente', +cod_cliente]);
  }





}
