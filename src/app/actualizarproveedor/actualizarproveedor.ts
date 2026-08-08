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
export class Actualizarproveedor implements OnInit{
  id : number = 0;

  proveedor={
    nombre_proveedor:'',
    telefono:'',
    direccion:''
  };

  constructor (private http: HttpClient,
    private router :Router,
    private route : ActivatedRoute) {}

    ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    }
    actualizarproveedor(){
      this.http.patch("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/"+this.id, this.proveedor,{
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
