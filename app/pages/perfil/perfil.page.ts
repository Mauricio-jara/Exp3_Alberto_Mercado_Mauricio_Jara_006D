import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre = sessionStorage.getItem('nombre');

  constructor(private menuController:MenuController) { }

  ngOnInit() {}

  mostrarMenu(){
    this.menuController.open('first');
  }

}