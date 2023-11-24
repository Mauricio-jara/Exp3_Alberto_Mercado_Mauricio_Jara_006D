import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifJuegoPageRoutingModule } from './modif-juego-routing.module';

import { ModifJuegoPage } from './modif-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifJuegoPageRoutingModule
  ],
  declarations: [ModifJuegoPage]
})
export class ModifJuegoPageModule {}
