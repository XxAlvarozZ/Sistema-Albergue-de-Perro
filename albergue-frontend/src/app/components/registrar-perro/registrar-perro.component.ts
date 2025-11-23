import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-registrar-perro',
  templateUrl: './registrar-perro.component.html'
})
export class RegistrarPerroComponent {
  perro = {
    nombre: '',
    raza: '',
    edad: '',
    tamaño: ''
  };

  mensaje = '';

  constructor(private api: ApiService) {}

  registrar() {
    this.api.registrarPerro(this.perro).subscribe(() => {
      this.mensaje = 'Gracias por el registro 😊';
    });
  }
}
