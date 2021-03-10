import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewloginPage } from './newlogin.page';

const routes: Routes = [
  {
    path: '',
    component: NewloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewloginPageRoutingModule {}
