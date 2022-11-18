import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConducirPageRoutingModule } from './conducir-routing.module';

import { ConducirPage } from './conducir.page';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConducirPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [ConducirPage]
})
export class ConducirPageModule { }
