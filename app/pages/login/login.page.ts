import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata: any;

  usuarios = {
    id: 0,
    correo: "",
    contraseña: "",
    rol: "",
    isactive: true
  }

  loginForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private builder: FormBuilder
  ) {
    this.loginForm = this.builder.group({
      "correo": new FormControl("", [Validators.required, Validators.minLength(4)]),
      "contraseña": new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.GetUserById(this.loginForm.value.correo).subscribe(resp => {
        this.userdata = resp;
        console.log(this.userdata)
        if (this.userdata.length > 0) {
          this.usuarios = {
            id: this.userdata[0].id,
            correo: this.userdata[0].correo,
            contraseña: this.userdata[0].contraseña,
            rol: this.userdata[0].rol,
            isactive: this.userdata[0].isactive
          }
          console.log(resp);
          console.log(this.usuarios.contraseña);
          if (this.usuarios.contraseña === this.loginForm.value.contraseña) {
            if (this.usuarios.isactive) {
              sessionStorage.setItem('correo', this.usuarios.correo);
              sessionStorage.setItem('rol', this.usuarios.rol);
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/lector");
            }
            else {
              this.UsuarioInactivo();
              console.log("Usuario inactivo, contacte a admin@registrapp.cl");
            }
          }
          else {
            this.Error();
            console.log("Error en credenciales")
          }
        }
        else {
          this.NoExiste();
          console.log("Usuario no existe")
        }
      })
    }
  }

  async showToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }

  async UsuarioInactivo() {
    const alerta = await this.alertController.create({
      header: "Usuario Inactivo",
      message: "Debe conectarse con app@registrapp.cl",
      buttons: ['Ok']
    })
    await alerta.present();
    return;
  }

  async Error() {
    const alerta = await this.alertController.create({
      header: "Error...",
      message: "Por favor revise sus credenciales",
      buttons: ['Ok']
    })
    await alerta.present();
    return;
  }

  async NoExiste() {
    const alerta = await this.alertController.create({
      header: "Error...",
      message: "Cuenta inexistente, por favor registrar",
      buttons: ['Ok']
    })
    await alerta.present();
    return;
  }

}
