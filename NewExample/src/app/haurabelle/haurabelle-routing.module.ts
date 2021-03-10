import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaurabellePage } from './haurabelle.page';

const routes: Routes = [
  {
    path: '',
    component: HaurabellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaurabellePageRoutingModule {}
