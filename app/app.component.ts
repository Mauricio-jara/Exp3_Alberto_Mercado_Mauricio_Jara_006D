import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/lector'
    },
    {
      name:'Perfil',
      icon: 'person-circle-outline',
      redirecTo:'/perfil'
    },
    {
      name:'scaner',
      icon: 'person-remove-outline',
      redirecTo:'/scarner'
    },
    {
      name:'Cerrar sesión',
      icon: 'person-remove-outline',
      redirecTo:'/loguot'
    },
  ]
}
