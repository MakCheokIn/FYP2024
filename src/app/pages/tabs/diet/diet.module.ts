import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietPageRoutingModule } from './diet-routing.module';

import { DietPage } from './diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // <-- Make sure this is imported
    IonicModule,
    DietPageRoutingModule
  ],
  declarations: [DietPage]
})
export class DietPageModule {}
