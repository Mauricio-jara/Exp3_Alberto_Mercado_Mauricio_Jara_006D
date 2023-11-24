import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { IJuegos } from '../interfaces/interfaces';

@Component({
  selector: 'app-eliminar-juego',
  templateUrl: './eliminar-juego.page.html',
  styleUrls: ['./eliminar-juego.page.scss'],
})
export class EliminarJuegoPage implements OnInit {

  newJuego: IJuegos = {
    id: 0,
    nombre: "",
    desc: "",
    precio: "",
    imagen: "",
    url: ""
  }

  constructor
  (
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getJuegoById(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getJuegoById(juegoId: number) {
    this.authService.buscarJuegoI(juegoId).subscribe(
      (resp:any) => {
        this.newJuego = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          desc: resp[0].desc,
          precio: resp[0].precio,
          imagen: resp[0].imagen,
          url: resp[0].url
        }
      }
    )
  }

  crearJuego() {
    this.authService.eliminarJuego(this.newJuego).subscribe();
    this.router.navigateByUrl("/juegos")
  }
}
