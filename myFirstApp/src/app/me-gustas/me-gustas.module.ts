import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeGustasPageRoutingModule } from './me-gustas-routing.module';

import { MeGustasPage } from './me-gustas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeGustasPageRoutingModule
  ],
  declarations: [MeGustasPage]
})
export class MeGustasPageModule {}
