import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipePage } from '../pages/recipe/recipe.page';
import { AddNewRecipePage } from '../pages/add-new-recipe/add-new-recipe.page';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';


type Recipe = {
  name?:string,
  description?:string,
  category?:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  recipes:any;
  sub: Subscription = new Subscription;
  
  constructor( public modalCtrl: ModalController,private dataService: DataService) {}
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.sub = this.dataService.getRecipes().subscribe((res) => {
      this.recipes = res;
      console.log(this.recipes);
    });
  }
  
  async goToRecipe(recipe: Recipe) {
    const modal = await this.modalCtrl.create({
      component: RecipePage,
      componentProps: {recipe}
    })
    return await modal.present();
  }


  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewRecipePage
    })
    return await modal.present();
  }
 


  }

  

