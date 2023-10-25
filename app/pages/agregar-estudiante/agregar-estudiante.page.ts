import { Component, OnInit } from '@angular/core';
import { IEstudiante } from 'src/app/interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.page.html',
  styleUrls: ['./agregar-estudiante.page.scss'],
})
export class AgregarEstudiantePage implements OnInit {

  newEstudiante: IEstudiante={
    nombre:'',
    rut: '',
    correo: ''
  }

  constructor(
    private apiCrud: ApiCrudService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  agregarEstudiante(){
    this.apiCrud.agregarEstudiante(this.newEstudiante).subscribe();
    this.router.navigateByUrl("/estudiantes");
  }

}
