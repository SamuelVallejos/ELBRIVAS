import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajePageRoutingModule } from './viaje-routing.module';
import { ViajePage } from './viaje.page';
import { HomePage } from 'src/app/home/home.page';
import { ViajecComponent } from 'src/app/components/viajec/viajec.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajePageRoutingModule
  ],
  declarations: [ViajePage, HomePage, ViajecComponent],
})
export class ViajePageModule { }
