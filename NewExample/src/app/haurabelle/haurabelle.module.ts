import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaurabellePageRoutingModule } from './haurabelle-routing.module';

import { HaurabellePage } from './haurabelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaurabellePageRoutingModule
  ],
  declarations: [HaurabellePage]
})
export class HaurabellePageModule {}
