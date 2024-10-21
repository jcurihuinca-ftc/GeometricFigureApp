import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Circulo } from '../models/figura-geometrica';

import { IonCard, IonInput, IonButton, IonCardHeader } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  standalone: true,
  imports:  [
    IonicModule, 
    FormsModule, 
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CircleComponent  implements OnInit {
  radio: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
    }
  

  ngOnInit() {

  }

}
