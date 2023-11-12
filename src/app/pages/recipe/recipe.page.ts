import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
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
  constructor(public modalCtrl: ModalController, private dataService:DataService, public alertController:AlertController) { }

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
  
  async dismiss(){
    await this.modalCtrl.dismiss();
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
    this.dismiss();
  }

  async showDeleteAlert() {
    const alert = await this.alertController.create({
      header: 'Izbrisi recept',
      message: 'Jeste li sigurni da zelite izbrisati ovaj recept?',
      buttons: [
        {
          text: 'Otkazi',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Izbrisi',
          handler: () => {
            this.deleteRecipe(this.recipe);
          }
        }
      ]
    });

    await alert.present();
  }
}
