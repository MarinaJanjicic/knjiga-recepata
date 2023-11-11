import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewRecipePage } from '../add-new-recipe/add-new-recipe.page';
import { UpdateRecipePage } from '../update-recipe/update-recipe.page';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  @Input() recipe: any;
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.recipe); 

  }

  cancel()
  {
    this.modalCtrl.dismiss();
  }

  

  async goToUpdatePage(task: Task) {

    const modal = await this.modalCtrl.create({
      component: UpdateRecipePage,
      componentProps: { task }
    })
    console.log(task)
    return await modal.present();
  }

  deleteRecipe()
  {

  }

}
