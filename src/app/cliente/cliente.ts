import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule, ],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {

  constructor(private router:R) {}


}
