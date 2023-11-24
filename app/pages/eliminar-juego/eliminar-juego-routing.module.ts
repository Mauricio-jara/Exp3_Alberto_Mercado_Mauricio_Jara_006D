import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarJuegoPage } from './eliminar-juego.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarJuegoPageRoutingModule {}
