import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiametroPageRoutingModule } from './diametro-routing.module';

import { DiametroPage } from './diametro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DiametroPageRoutingModule
  ],
  declarations: [DiametroPage]
})
export class DiametroPageModule {}
