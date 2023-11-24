import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.page.html',
  styleUrls: ['./lector.page.scss'],
})
export class LectorPage implements OnInit {

  nombre = sessionStorage.getItem('nombre');

  tuID = parseInt(sessionStorage.getItem('id') || "", 10);

  constructor
  (
    private menuController: MenuController,
  ) { }

  ngOnInit() {
    console.log(this.tuID)
  }
  
  MostrarMenu(){
    this.menuController.open('first');
  }

}
