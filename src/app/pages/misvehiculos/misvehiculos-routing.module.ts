import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisvehiculosPage } from './misvehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: MisvehiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisvehiculosPageRoutingModule {}
