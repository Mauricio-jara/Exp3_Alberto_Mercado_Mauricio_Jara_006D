import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'estudiantes',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lector',
    loadChildren: () => import('./pages/lector/lector.module').then( m => m.LectorPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'agregar-estudiante',
    loadChildren: () => import('./pages/agregar-estudiante/agregar-estudiante.module').then( m => m.AgregarEstudiantePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'loguot',
    loadChildren: () => import('./pages/loguot/loguot.module').then( m => m.LoguotPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
