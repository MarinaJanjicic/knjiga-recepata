import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AngularFireModule} from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import{provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {provideFirestore,getFirestore} from '@angular/fire/firestore';



//import { initializeApp } from "firebase/app";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebase),
  provideFirebaseApp(()=> initializeApp(environment.firebase)),
provideFirestore(()=>getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

