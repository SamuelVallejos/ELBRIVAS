import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeextraPage } from './viajeextra.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeextraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeextraPageRoutingModule {}
