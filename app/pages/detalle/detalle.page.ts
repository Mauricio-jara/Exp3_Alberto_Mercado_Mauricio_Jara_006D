import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  estudiantes={
    id: 0,
    nombre: "",
    correo: ""
  }

  constructor(
    private apiCrud: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  ionViewWillEnter(){
    this.getEstudianteById(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getEstudianteById(estudianteId: number) {
    this.apiCrud.buscarEstudianteI(estudianteId).subscribe(
      (resp:any) => {
        this.estudiantes = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          correo: resp[0].correo
        }
      }
    )
  }
}
