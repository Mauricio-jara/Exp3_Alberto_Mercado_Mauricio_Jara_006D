import { Component, OnInit } from '@angular/core';
import { IJuegos } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-juego',
  templateUrl: './modif-juego.page.html',
  styleUrls: ['./modif-juego.page.scss'],
})
export class ModifJuegoPage implements OnInit {

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
    if (this.newJuego.precio.indexOf('$') == -1)
    {
      this.newJuego.precio = "$" + this.newJuego.precio;
    }
    this.authService.actualizarJuego(this.newJuego).subscribe();
    this.router.navigateByUrl("/detalle-juegos/" + this.getIdFromUrl())
  }
}
