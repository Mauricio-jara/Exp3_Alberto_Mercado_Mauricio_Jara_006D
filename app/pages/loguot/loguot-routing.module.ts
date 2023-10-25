import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoguotPage } from './loguot.page';

const routes: Routes = [
  {
    path: '',
    component: LoguotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoguotPageRoutingModule {}
