import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-perro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registrar-perro.component.html'
})
export class RegistrarPerroComponent {
  perro = {
    nombre: '',
    raza: '',
    edad: 0,
    tamano: ''
  };
  mensaje = '';

  constructor(private api: ApiService) {}

  registrar() {
    this.api.crearPerro(this.perro).subscribe({
      next: () => {
        this.mensaje = 'Gracias por el registro';
        this.perro = { nombre: '', raza: '', edad: 0, tamano: '' };
      },
      error: (err) => {
        console.error('Error registrar perro:', err);
        this.mensaje = 'Error al registrar';
      }
    });
  }
}