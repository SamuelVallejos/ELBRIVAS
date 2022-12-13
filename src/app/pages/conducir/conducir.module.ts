import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConducirPageRoutingModule } from './conducir-routing.module';

import { ConducirPage } from './conducir.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { ViajesComponent } from 'src/app/components/viajes/viajes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConducirPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [ConducirPage, ViajesComponent]
})
export class ConducirPageModule { }
