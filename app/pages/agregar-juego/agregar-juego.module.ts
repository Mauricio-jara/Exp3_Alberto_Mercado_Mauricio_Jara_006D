import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarJuegoPageRoutingModule } from './agregar-juego-routing.module';

import { AgregarJuegoPage } from './agregar-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarJuegoPageRoutingModule
  ],
  declarations: [AgregarJuegoPage]
})
export class AgregarJuegoPageModule {}
