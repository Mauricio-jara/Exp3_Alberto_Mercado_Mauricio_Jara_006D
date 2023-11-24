import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScarnerPage } from './scarner.page';

const routes: Routes = [
  {
    path: '',
    component: ScarnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScarnerPageRoutingModule {}
