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
      name:'inicio',
      icon: 'home-outline',
      redirecTo:'/lector'
    },
    {
      name:'Perfil',
      icon: 'person-circle-outline',
      redirecTo:'/perfil'
    },
    {
      name:'usuarios',
      icon: 'person-outline',
      redirecTo:'/estudiantes'
    },
    {
      name:'Cerrar sesion',
      icon: 'person-remove-outline',
      redirecTo:'/loguot'
    },
  ]
}
