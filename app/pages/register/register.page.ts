import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController, ToastController} from '@ionic/angular';  
import { IEstudiante, IProfesor } from '../interfaces/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {  
  
  registerForm : FormGroup;

  newProfesor: IProfesor = {
    nombre:'',
    correo:'',
    contraseña: '',
    isactive: false,
    asignaturas: []
  }

  newEstudiante: IEstudiante = {
    nombre:'',
    correo:'',
    contraseña: '',
    isactive: false
  }

  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertcontroller: AlertController,
    private builder: FormBuilder,
    private toast: ToastController
  ) { this.registerForm = this.builder.group({
    "nombre": new FormControl("", [Validators.required, Validators.minLength(4)]),
    "correo": new FormControl("", [Validators.required, Validators.minLength(4)]),
    "contraseña": new FormControl("", [Validators.required, Validators.minLength(8)]),
    "rcontraseña": new FormControl("", [Validators.required, Validators.minLength(8)]),
    "role": new FormControl("", Validators.required),
  })}
  
  ngOnInit() {
  }

  register(){
    console.log("registrando usuario");
    if (this.registerForm.valid)
    {
      if (this.registerForm.value.role === "Profesor")
      {
        this.newProfesor.nombre = this.registerForm.value.nombre;
        this.newProfesor.correo = this.registerForm.value.correo;
        this.newProfesor.contraseña = this.registerForm.value.contraseña;
        this.newProfesor.isactive=true;
        this.newProfesor.asignaturas=[];
        this.authservice.CrearProfesor(this.newProfesor).subscribe();
        this.mostrarMensaje();
        this.registerForm.reset();
        this.router.navigateByUrl("/login");
      }
      else if (this.registerForm.value.role === "Alumno")
      {
        this.newEstudiante.nombre = this.registerForm.value.nombre;
        this.newEstudiante.correo = this.registerForm.value.correo;
        this.newEstudiante.contraseña = this.registerForm.value.contraseña;
        this.newEstudiante.isactive=true;
        this.authservice.CrearEstudiante(this.newEstudiante).subscribe();
        this.mostrarMensaje();
        this.registerForm.reset();
        this.router.navigateByUrl("/login");
      }
    }
    else {
      this.showToast('Ingrese datos validos en los campos');
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({ 
      header: 'Usuario cread@',
      message: 'Bienvenido! '+ this.newProfesor.nombre + ' :D',
      buttons: ['Ok']
    });
    alerta.present();
  }

  async showToast(msg: any) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }
}
