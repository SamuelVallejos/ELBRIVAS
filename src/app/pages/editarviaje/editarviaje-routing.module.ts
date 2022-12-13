import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarviajePage } from './editarviaje.page';

const routes: Routes = [
  {
    path: '',
    component: EditarviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarviajePageRoutingModule {}
