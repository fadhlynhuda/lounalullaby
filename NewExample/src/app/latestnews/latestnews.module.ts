import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestnewsPageRoutingModule } from './latestnews-routing.module';

import { LatestnewsPage } from './latestnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestnewsPageRoutingModule
  ],
  declarations: [LatestnewsPage]
})
export class LatestnewsPageModule {}
