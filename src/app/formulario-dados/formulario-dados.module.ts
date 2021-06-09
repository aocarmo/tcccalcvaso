import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { FormularioDadosPageRoutingModule } from './formulario-dados-routing.module';

import { FormularioDadosPage } from './formulario-dados.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioDadosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioDadosPage]
})
export class FormularioDadosPageModule {}
