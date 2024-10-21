import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrianguloEscaleno, TrianguloEquilatero } from '../models/figura-geometrica';

import { IonCard } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    FormsModule, 
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TriangleComponent  implements OnInit {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  ladoEquilatero: number = 0;

  perimetro: number | null = null;

  tipoTriangulo: 'Escaleno' | 'Equilatero' = 'Escaleno';

  ngOnInit() {}

  calcularPerimetro() {
    if (this.tipoTriangulo === 'Escaleno') {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.perimetro = triangulo.calcularPerimetro();
    } else if (this.tipoTriangulo === 'Equilatero') {
      const triangulo = new TrianguloEquilatero(this.ladoEquilatero);
      this.perimetro = triangulo.calcularPerimetro();
    }
  }


}
