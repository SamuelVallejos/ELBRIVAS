import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'rcontrasena',
    loadChildren: () => import('./pages/rcontrasena/rcontrasena.module').then(m => m.RcontrasenaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'conducir',
    loadChildren: () => import('./pages/conducir/conducir.module').then(m => m.ConducirPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then(m => m.ViajePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'formulario-vehiculo',
    loadChildren: () => import('./pages/formulario-vehiculo/formulario-vehiculo.module').then(m => m.FormularioVehiculoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then(m => m.EditarperfilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'viajeextra',
    loadChildren: () => import('./pages/viajeextra/viajeextra.module').then(m => m.ViajeextraPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'misvehiculos',
    loadChildren: () => import('./pages/misvehiculos/misvehiculos.module').then( m => m.MisvehiculosPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'agregarvehiculo',
    loadChildren: () => import('./pages/agregarvehiculo/agregarvehiculo.module').then( m => m.AgregarvehiculoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crearviaje',
    loadChildren: () => import('./pages/crearviaje/crearviaje.module').then( m => m.CrearviajePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then( m => m.AcercadePageModule),
    canLoad: [AuthGuard]
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
