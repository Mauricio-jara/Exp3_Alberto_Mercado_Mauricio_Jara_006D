import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-juegos',
  templateUrl: './detalle-juegos.page.html',
  styleUrls: ['./detalle-juegos.page.scss'],
})
export class DetalleJuegosPage implements OnInit {

  juegos={
    id: 0,
    nombre: "",
    desc: "",
    precio: "",
    imagen: "",
    url: ""
  }

  constructor(
    private apiCrud: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

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
    this.apiCrud.buscarJuegoI(juegoId).subscribe(
      (resp:any) => {
        this.juegos = {
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
}
