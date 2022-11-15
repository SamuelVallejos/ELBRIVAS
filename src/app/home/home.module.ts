import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ConductorComponent } from '../components/conductor/conductor.component';
import { ConducirPage } from '../pages/conducir/conducir.page';
import { ViajePage } from '../pages/viaje/viaje.page';
import {MatBadgeModule} from '@angular/material/badge'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatBadgeModule
  ],
  declarations: [HomePage,ConductorComponent,ConducirPage,ViajePage]
})
export class HomePageModule {}
