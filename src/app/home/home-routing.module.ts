import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConducirPage } from '../pages/conducir/conducir.page';
import { ViajePage } from '../pages/viaje/viaje.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'conducir',
        component: ConducirPage
      },
      {
        path: 'viaje',
        component: ViajePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
