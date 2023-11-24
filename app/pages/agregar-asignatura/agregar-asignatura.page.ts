import { Component, OnInit } from '@angular/core';
import { IAsignatura } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './agregar-asignatura.page.html',
  styleUrls: ['./agregar-asignatura.page.scss'],
})
export class AgregarAsignaturaPage implements OnInit {

  newAsignatura: IAsignatura = {
    nombre: "",
    tipo: "",
    horas: 0
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  crearAsignatura() {
    this.authService.crearAsignatura(this.newAsignatura, this.getIdFromUrl()).subscribe();
    this.router.navigateByUrl("/asignaturas/" + this.getIdFromUrl())
  }

}
