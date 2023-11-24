import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
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
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'juegos',
    loadChildren: () => import('./pages/juegos/juegos.module').then( m => m.JuegosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalle-juegos/:id',
    loadChildren: () => import('./pages/detalle-juegos/detalle-juegos.module').then( m => m.DetalleJuegosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'agregar-juego',
    loadChildren: () => import('./pages/agregar-juego/agregar-juego.module').then( m => m.AgregarJuegoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'asignaturas/:id',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'agregar-asignatura/:id',
    loadChildren: () => import('./pages/agregar-asignatura/agregar-asignatura.module').then( m => m.AgregarAsignaturaPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'modif-juego/:id',
    loadChildren: () => import('./pages/modif-juego/modif-juego.module').then( m => m.ModifJuegoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'eliminar-juego/:id',
    loadChildren: () => import('./pages/eliminar-juego/eliminar-juego.module').then( m => m.EliminarJuegoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qr/:id',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'scarner',
    loadChildren: () => import('./pages/scarner/scarner.module').then( m => m.ScarnerPageModule),
    canActivate: [AutorizadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
