import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewRecipePage } from './add-new-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewRecipePageRoutingModule {}
