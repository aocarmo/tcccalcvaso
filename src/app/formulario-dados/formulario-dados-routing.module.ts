import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioDadosPage } from './formulario-dados.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioDadosPageRoutingModule {}
