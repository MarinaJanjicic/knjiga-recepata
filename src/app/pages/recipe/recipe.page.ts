import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewRecipePage } from '../add-new-recipe/add-new-recipe.page';
import { UpdateRecipePage } from '../update-recipe/update-recipe.page';
import { DataService, Recipe } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit, OnDestroy {

  @Input() recipe: any;
  recipes:any;
  sub: Subscription = new Subscription;
  constructor(public modalCtrl: ModalController, private dataService:DataService) { }

  ngOnInit() {
    this.getData(); 

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  cancel()
  {
    this.modalCtrl.dismiss();
  }

  async getData()
  {
    this.sub=this.dataService.getRecipes().subscribe((res)=>{
      this.recipes=res;
      console.log(this.recipes);
    })
  }
  

  async goToUpdatePage(recipe: Recipe) {

    const modal = await this.modalCtrl.create({
      component: UpdateRecipePage,
      componentProps: { recipe }
    })
    console.log(recipe)
    return await modal.present();
  }

  async deleteRecipe(recipe:any)
  {
    await this.dataService.deleteRecipe(recipe);
  }

}
