import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionPageRoutingModule } from './inicio-sesion-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InicioSesionPage } from './inicio-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionPageRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    MatIconModule,
    MatInputModule,
  ],
  declarations: [InicioSesionPage]
})
export class InicioSesionPageModule { }
