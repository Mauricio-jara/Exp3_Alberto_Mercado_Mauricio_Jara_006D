import { Component, OnInit } from '@angular/core';
import { IJuego } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.page.html',
  styleUrls: ['./agregar-juego.page.scss'],
})
export class AgregarJuegoPage implements OnInit {

  newJuego: IJuego = {
    nombre: "",
    desc: "",
    precio: "",
    imagen: "",
    url: ""
  }

  imagenRaw: any;

  constructor
  (
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  crearJuego() {
    this.newJuego.precio = "$" + this.newJuego.precio;
    this.authService.CrearJuego(this.newJuego).subscribe();
    this.router.navigateByUrl("/juegos")
  }

}
