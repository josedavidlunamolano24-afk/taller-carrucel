import { Component, OnInit, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-actualizarproveedor',
  imports: [FormsModule],
  templateUrl: './actualizarproveedor.html',
  styleUrl: './actualizarproveedor.css',
})
export class Actualizarproveedor{
  codigo_proveedor: number = 0;

  proveedor={
    nombre_proveedor:'',
    telefono:'',
    direccion:''
  };

  constructor (private http: HttpClient,
    private router :Router,
    private route : ActivatedRoute) {}

    ngOnInit() {
    this.codigo_proveedor= this.route.snapshot.params['codigo_proveedor'];
    
    }
    actualizarproveedor(){
      this.http.patch("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedor?codigo_proveedor=eq."+this.codigo_proveedor, this.proveedor,{
        headers: {
          apikey: "sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          Authorization: "Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          'Content-Type':'application/json',
        

      }
        }).subscribe({next:(respuesta)=>{
          alert("proveedor actualizado"+ respuesta);
          this.router.navigate(['/proveedor'])
        }
      
      });
    }
}
