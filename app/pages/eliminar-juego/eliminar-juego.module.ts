import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarJuegoPageRoutingModule } from './eliminar-juego-routing.module';

import { EliminarJuegoPage } from './eliminar-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarJuegoPageRoutingModule
  ],
  declarations: [EliminarJuegoPage]
})
export class EliminarJuegoPageModule {}
