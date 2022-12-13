import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarviajePageRoutingModule } from './editarviaje-routing.module';

import { EditarviajePage } from './editarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarviajePageRoutingModule,
    
  ],
  declarations: [EditarviajePage]
})
export class EditarviajePageModule {}
