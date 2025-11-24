import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donacion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donacion.component.html'
})
export class DonacionComponent {
  donacion = {
    nombre_donante: '',
    mensaje: '',
    monto: 0
  };
  respuesta = '';

  constructor(private api: ApiService) {}

  enviar() {
    this.api.crearDonacion(this.donacion).subscribe({
      next: () => {
        this.respuesta = 'Gracias por su participación';
        this.donacion = { nombre_donante: '', mensaje: '', monto: 0 };
      },
      error: (err) => {
        console.error('Error al enviar donación:', err);
        this.respuesta = 'Error al enviar donación';
      }
    });
  }
}