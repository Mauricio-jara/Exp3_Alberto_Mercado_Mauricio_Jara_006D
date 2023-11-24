import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifJuegoPage } from './modif-juego.page';

const routes: Routes = [
  {
    path: '',
    component: ModifJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifJuegoPageRoutingModule {}
