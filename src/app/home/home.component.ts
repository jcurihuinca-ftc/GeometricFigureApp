import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonButton, IonCard, IonCardHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonCardHeader, RouterModule]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  navigateToCircle() {

  }

  navigateToTriangle() {

  }

}
