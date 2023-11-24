import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleJuegosPage } from './detalle-juegos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleJuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleJuegosPageRoutingModule {}
