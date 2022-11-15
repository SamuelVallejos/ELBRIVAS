import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViajeextraPageRoutingModule } from './viajeextra-routing.module';
import { ViajeextraPage } from './viajeextra.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeextraPageRoutingModule
  ],
  declarations: [ViajeextraPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViajeextraPageModule { }
