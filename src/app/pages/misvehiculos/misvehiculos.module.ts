import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisvehiculosPageRoutingModule } from './misvehiculos-routing.module';

import { MisvehiculosPage } from './misvehiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisvehiculosPageRoutingModule,
  ],
  declarations: [MisvehiculosPage]
})
export class MisvehiculosPageModule {}
