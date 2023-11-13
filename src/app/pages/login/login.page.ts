import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup 
  constructor(public formBuilder:FormBuilder,public loadingCtrl:LoadingController,public authService:AutheticationService,public router:Router,public alertController: AlertController) { 

  }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email,
    Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")]],
      password:['',[Validators.required]]})
  }

  get errorControl(){
    return this.loginForm?.controls;
  }



  async login(){
    const loading= await this.loadingCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user=await this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password).catch((error)=>{
        this.showLoginAlert();
        console.log(error);
        loading.dismiss();
        
    })

      if(user){
        loading.dismiss()
        this.router.navigate(['/home'])
      }
      
  
    }
    else{
    
      loading.dismiss();
      this.showLoginAlert();
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


}}

