import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
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
    rut: "",
    correo: ""
  }

  constructor(
    private apiCrud: ApiCrudService,
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
    this.apiCrud.buscarEstudiante(estudianteId).subscribe(
      (resp:any) => {
        this.estudiantes = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          rut: resp[0].rut,
          correo: resp[0].correo
        }
      }
    )
  }
}
