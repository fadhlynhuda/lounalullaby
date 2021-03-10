import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestnewsPage } from './latestnews.page';

const routes: Routes = [
  {
    path: '',
    component: LatestnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestnewsPageRoutingModule {}
