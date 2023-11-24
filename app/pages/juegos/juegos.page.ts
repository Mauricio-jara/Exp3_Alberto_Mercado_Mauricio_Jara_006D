import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IJuegos } from '../interfaces/interfaces';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  juegos: IJuegos[]=[];

  constructor(
    private juegoService: AuthService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
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

    this.juegoService.listarJuegos().subscribe({
      next: resp => {
        console.log(resp);
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.juegos = JSON.parse(listString)
        event?.target.complete();
        console.log(this.juegos);
      },
      error: err => {
        console.log(err.error.message);
        loading.dismiss();
      }
    })

  }
}
