import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoguotPageRoutingModule } from './loguot-routing.module';

import { LoguotPage } from './loguot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoguotPageRoutingModule
  ],
  declarations: [LoguotPage]
})
export class LoguotPageModule {}
