import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-loguot',
  templateUrl: './loguot.page.html',
  styleUrls: ['./loguot.page.scss'],
})
export class LoguotPage implements OnInit {
  username: string = '';
  password: string = ''; 

  constructor(private menuController: MenuController,
              private authservice: AuthService,
              private router: Router) { }
  
  ngOnInit(){
    
  }

  logout() {
    this.authservice.logout();
    this.username = '';
    this.password = ''; // Limpiando la contraseña
    this.router.navigate(['/login']); 
    }
  
  mostrarMenu() {
    this.menuController.open('first');
  }

  ionViewWillEnter(){             //actualiza la lista cada vez que se agregue un objeto
    this.username = this.authservice.getLoggedInUsername() || '';
    this.logout();
  }
}
