import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarviajePageRoutingModule } from './editarviaje-routing.module';

import { EditarviajePage } from './editarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarviajePageRoutingModule,
    FormsModule, 
    ReactiveFormsModule
    ],
  declarations: [EditarviajePage]
})
export class EditarviajePageModule {}
