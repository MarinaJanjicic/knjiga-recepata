import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewRecipePageRoutingModule } from './add-new-recipe-routing.module';

import { AddNewRecipePage } from './add-new-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewRecipePageRoutingModule
  ],
  declarations: [AddNewRecipePage]
})
export class AddNewRecipePageModule {}
