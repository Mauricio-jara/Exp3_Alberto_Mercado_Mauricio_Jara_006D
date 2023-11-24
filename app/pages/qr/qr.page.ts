import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Iqr } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  nombre:any;

  newQr: Iqr={
    nombre:'',
    fecha:'',
    materia:'',
    asistencia: []
  }

  constructor(private menuController: MenuController,
              private datePipe: DatePipe,
              private auth: AuthService,
              private alert: AlertController,
              private router: Router) {
                this.nombre= sessionStorage.getItem('nombre');
               }

  ngOnInit() {
  }

  CrearQr(){
    const fecha= new Date();
    const fechaFormat = this.datePipe.transform(fecha, 'dd/MM/yyyy');
    this.newQr.nombre=this.nombre;
    this.newQr.fecha = `"${fechaFormat}"`;
    this.auth.crearQr(this.newQr).subscribe();
  }
}
