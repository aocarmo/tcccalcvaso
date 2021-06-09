import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiametroPage } from './diametro.page';

const routes: Routes = [
  {
    path: '',
    component: DiametroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiametroPageRoutingModule {}
