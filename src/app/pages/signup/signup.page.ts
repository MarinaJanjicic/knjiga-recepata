import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController} from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup 


  constructor(public formBuilder:FormBuilder,public loadingCtrl:LoadingController,public authService:AutheticationService,public router: Router,public alertController: AlertController,private dataservice: DataService) { }

  ngOnInit() {
    this.regForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email,
    Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")]],
      password:['',[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]{6,20}")]]
    })
  }
  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp(){
    const loading= await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm?.valid){
      const user=await this.authService.registerUser(this.regForm.value.email,this.regForm.value.password).catch((error)=>{
        console.log(error);
        this.showLoginAlert();
        loading.dismiss();
      })

      if(user){
        loading.dismiss();
        this.addUser();
        this.router.navigate(['/home']);
      }

   
    }
    else{
      this.showLoginAlert();
      loading.dismiss();
   
    }
  }

  async showLoginAlert() {
    const alert = await this.alertController.create({
      header: 'Neispravni parametri',
      message: 'Netacno unet email ili sifra',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
        }
      ]
    });
alert.present();


}



async addUser() {
  
    await this.dataservice.addUser(
      {
       
        email: this.regForm.value.email,
        password:this.regForm.value.password
       
      }
    );
    
  }

  
}




