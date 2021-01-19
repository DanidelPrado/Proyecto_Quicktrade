import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeGustasPage } from './me-gustas.page';

const routes: Routes = [
  {
    path: '',
    component: MeGustasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeGustasPageRoutingModule {}
