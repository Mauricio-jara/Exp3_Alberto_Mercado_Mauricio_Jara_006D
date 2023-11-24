import { Component, OnInit } from '@angular/core';
import { IAsignatura, IProfesor } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  profesor: IProfesor = {
    nombre: "",
    correo: "",
    contraseña: "",
    isactive: false,
    asignaturas: []
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getJuegoById(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  async getJuegoById(juegoId: number) {
    this.authService.buscarProfesorI(juegoId).subscribe(
      
      (resp: any) => {
        this.profesor = {
          nombre: resp[0].nombre,
          correo: resp[0].correo,
          contraseña: resp[0].contraseña,
          isactive: resp[0].isactive,
          asignaturas: resp[0].asignaturas
        };
      }
    );
  }
}