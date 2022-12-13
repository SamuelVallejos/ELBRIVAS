import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'rcontrasena',
    loadChildren: () => import('./pages/rcontrasena/rcontrasena.module').then(m => m.RcontrasenaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'conducir',
    loadChildren: () => import('./pages/conducir/conducir.module').then(m => m.ConducirPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then(m => m.ViajePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'formulario-vehiculo',
    loadChildren: () => import('./pages/formulario-vehiculo/formulario-vehiculo.module').then(m => m.FormularioVehiculoPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then(m => m.EditarperfilPageModule)
  },
  {
    path: 'viajeextra',
    loadChildren: () => import('./pages/viajeextra/viajeextra.module').then(m => m.ViajeextraPageModule)
  },
  {
    path: 'misvehiculos',
    loadChildren: () => import('./pages/misvehiculos/misvehiculos.module').then(m => m.MisvehiculosPageModule)
  },
  {
    path: 'agregarvehiculo',
    loadChildren: () => import('./pages/agregarvehiculo/agregarvehiculo.module').then(m => m.AgregarvehiculoPageModule)
  },
  {
    path: 'crearviaje',
    loadChildren: () => import('./pages/crearviaje/crearviaje.module').then(m => m.CrearviajePageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then(m => m.AcercadePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
