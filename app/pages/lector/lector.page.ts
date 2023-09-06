import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.page.html',
  styleUrls: ['./lector.page.scss'],
})
export class LectorPage implements OnInit {

  constructor(private menuController: MenuController,) { }

  ngOnInit() {
  }
  
  MostrarMenu(){
    this.menuController.open('first');
  }
}
