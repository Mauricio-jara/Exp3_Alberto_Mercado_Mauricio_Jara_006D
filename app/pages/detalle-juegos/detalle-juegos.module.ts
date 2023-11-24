import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleJuegosPageRoutingModule } from './detalle-juegos-routing.module';

import { DetalleJuegosPage } from './detalle-juegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleJuegosPageRoutingModule
  ],
  declarations: [DetalleJuegosPage]
})
export class DetalleJuegosPageModule {}
