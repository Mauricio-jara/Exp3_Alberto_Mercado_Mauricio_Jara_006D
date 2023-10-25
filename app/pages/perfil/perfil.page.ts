import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  
  usuario={
    id: 0,
    nombre: "",
    correo: "",
    contraseña: "",
    rol: "",
    isactive: true
  }


constructor(private authservice: AuthService,
            private router: Router,
            private menuController:MenuController) { }

ngOnInit() {
  
}

//Obtiene el id desde la url
getIdFromUrl(){
  let url = this.router.url;
  let arr = url.split("/,3");
  let id = parseInt(arr[2]);
  return id;
}

//Obtenemos el objeto por medio del id

mostrarMenu(){
  this.menuController.open('first');
}
obtenerUsuario(){
  this.authservice.GetUserById(this.authservice.getLoggedInUsername).subscribe(
    (resp:any) => {
      this.usuario = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        correo: resp[0].correo,
        contraseña: resp[0].contraseña,
        rol: resp[0].rol,
        isactive: resp[0].isactive}
      }
  );
}
}