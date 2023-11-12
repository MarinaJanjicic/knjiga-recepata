import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.page.html',
  styleUrls: ['./add-new-recipe.page.scss'],
})
export class AddNewRecipePage implements OnInit {

  recipeName!: string
  recipeCategory!: string
  recipeDescription!:string
 

  constructor(public modalCtrl: ModalController, private dataservice: DataService, private toastController: ToastController) { }

  ngOnInit() {

  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }



  async presentToast(poruka:string) {
    const toast = await this.toastController.create({
      message: poruka,
      duration: 3000,
      position: 'top',
    });

    await toast.present();
  }

  

  //funkcija za dodavanje recepta
  async addRecipe() {
    if(this.recipeCategory!=null && this.recipeDescription!="" && this.recipeName!="")
    {
      await this.dataservice.addRecipe(
        {
         
          category: this.recipeCategory,
          description:this.recipeDescription,
          name: this.recipeName
        }
      );
      this.presentToast("Uspesno ste uneli novi recept!");
      this.dismiss();
    }

    else this.presentToast("Unesite sve podatke!")

    
  }

}

