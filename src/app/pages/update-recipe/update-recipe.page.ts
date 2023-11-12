import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Recipe } from 'src/app/service/data.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.page.html',
  styleUrls: ['./update-recipe.page.scss'],
})
export class UpdateRecipePage implements OnInit {

  @Input() recipe:any;
  number:number=0;
  constructor(public modalCtrl:ModalController, private dataService:DataService) { }

  ngOnInit() {
    console.log(this.recipe);
  }

  async dismiss(){
    await this.modalCtrl.dismiss();
  }
  async updateRecipe(){
    await this.dataService.updateRecipe(this.recipe);
  }

}
