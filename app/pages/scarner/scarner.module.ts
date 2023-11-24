import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScarnerPageRoutingModule } from './scarner-routing.module';

import { ScarnerPage } from './scarner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScarnerPageRoutingModule
  ],
  declarations: [ScarnerPage]
})
export class ScarnerPageModule {}
