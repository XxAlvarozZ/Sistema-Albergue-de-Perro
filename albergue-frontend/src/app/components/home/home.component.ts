import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService, Perro } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  perros: Perro[] = [];

  constructor(private api: ApiService) {
    this.api.listarPerros().subscribe({
      next: (data) => this.perros = data,
      error: (err) => console.error('Error al listar perros', err)
    });
  }
}