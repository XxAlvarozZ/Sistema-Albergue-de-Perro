import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarPerroComponent } from './registrar-perro.component';
import { FormsModule } from '@angular/forms';

describe('RegistrarPerroComponent', () => {
  let component: RegistrarPerroComponent;
  let fixture: ComponentFixture<RegistrarPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegistrarPerroComponent,
        FormsModule    // Importar FormsModule si usas ngModel
      ],
      providers: []  // aquí puedes poner servicios si el componente los necesita
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // importante para inicializar
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});