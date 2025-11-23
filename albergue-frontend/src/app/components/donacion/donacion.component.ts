import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-donacion',
  templateUrl: './donacion.component.html'
})
export class DonacionComponent {
  donacion = {
    cantidad: '',
    mensaje: ''
  };

  respuesta = '';

  constructor(private api: ApiService) {}

  enviar() {
    this.api.enviarDonacion(this.donacion).subscribe(() => {
      this.respuesta = 'Gracias por tu colaboración 🐶❤️';
    });
  }
}
