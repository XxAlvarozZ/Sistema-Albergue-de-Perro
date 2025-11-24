import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarPerroComponent } from './components/registrar-perro/registrar-perro.component';
import { DonacionComponent } from './components/donacion/donacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registrar', component: RegistrarPerroComponent },
  { path: 'donacion', component: DonacionComponent }
];