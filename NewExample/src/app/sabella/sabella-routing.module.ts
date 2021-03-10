import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SabellaPage } from './sabella.page';

const routes: Routes = [
  {
    path: '',
    component: SabellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SabellaPageRoutingModule {}
