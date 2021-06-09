import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'diametro',
    loadChildren: () => import('./pages/diametro/diametro.module').then( m => m.DiametroPageModule)
  },
  {
    path: 'confirme',
    loadChildren: () => import('./pages/confirme/confirme.module').then( m => m.ConfirmePageModule)
  },
  {
    path: 'calculo',
    loadChildren: () => import('./pages/calculo/calculo.module').then( m => m.CalculoPageModule)
  },
  {
    path: 'formulario-dados',
    loadChildren: () => import('./formulario-dados/formulario-dados.module').then( m => m.FormularioDadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
