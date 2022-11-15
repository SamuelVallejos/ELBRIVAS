import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioVehiculoPageRoutingModule } from './formulario-vehiculo-routing.module';

import { FormularioVehiculoPage } from './formulario-vehiculo.page';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioVehiculoPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [FormularioVehiculoPage]
})
export class FormularioVehiculoPageModule {}
