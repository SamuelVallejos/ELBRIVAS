import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioVehiculoPage } from './formulario-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioVehiculoPageRoutingModule {}
