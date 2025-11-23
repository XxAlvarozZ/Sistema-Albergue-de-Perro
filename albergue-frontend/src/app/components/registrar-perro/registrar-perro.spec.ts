import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPerro } from './registrar-perro';

describe('RegistrarPerro', () => {
  let component: RegistrarPerro;
  let fixture: ComponentFixture<RegistrarPerro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPerro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPerro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
