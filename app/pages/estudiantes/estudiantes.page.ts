
import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController, MenuController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IEstudiantes } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage {

  estudiantes: IEstudiantes[]=[];

  constructor(
    private estudianteService: ApiCrudService,
    private loadingCtrl: LoadingController,
    private menuController: MenuController
  ) { }
  
  MostrarMenu(){
    this.menuController.open('first');
  }  

  ionViewWillEnter() {
    this.loadEstudiantes();
  }

  async loadEstudiantes(event?: InfiniteScrollCustomEvent) {

    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    })
    await loading.present();

    this.estudianteService.listarEstudiantes().subscribe({
      next: resp => {
        console.log(resp);
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.estudiantes = JSON.parse(listString)
        event?.target.complete();
        console.log(this.estudiantes);
      },
      error: err => {
        console.log(err.error.message);
        loading.dismiss();
      }
    })

  }

}
