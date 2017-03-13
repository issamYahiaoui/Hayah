import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { PublicationComponent } from './main-layout/publication/publication.component';
import {ServicePubService} from "./service-pub.service";
import {HttpserviceService} from "./httpservice.publication";
import { EntityEvent } from './main-layout/entity-event/entity-event.component';
import { EntityDemandeSang } from './main-layout/entity-demande-sang/entity-demande-sang.component';
import { DemandeSangComponent } from './main-layout/demande-sang/demande-sang.component';
import { EvenementComponent } from './main-layout/evenement/evenement.component';
import {HttpserviceEventService} from "./httpservice-event.service";
import {HttpserviceSangService} from "./httpservice-sang.service";
import {EventServiceService} from "./event-service.service";
import {SangServiceService} from "./sang-service.service";
import {CategoriesService} from "./categories.service";
import { PublierComponent } from './main-layout/publier/publier.component';
import { AngularFireModule } from 'angularfire2';
import { routes } from './app.router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EmailComponent } from './components/user/email/email.component';
import { HomeComponent } from './components/user/home/home.component';
import { AuthGuard } from './auth.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginFortComponent } from './components/login-fort/login-fort.component';
import { RegisterFortComponent } from './components/register-fort/register-fort.component';
import { NavComponent } from './components/nav/nav.component';
import {HttpnotificationService} from './httpNotification.service';
import { MajidComponent } from './majid/majid.component'

  // Initialize Firebase
 export const config = {
    apiKey: "AIzaSyDiZTCigvO7_PKlKjKoBN6rRyLPk-O8jn0",
    authDomain: "hack-it-2e239.firebaseapp.com",
    databaseURL: "https://hack-it-2e239.firebaseio.com",
    storageBucket: "hack-it-2e239.appspot.com",
    messagingSenderId: "414959087782"
  };
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLayoutComponent,
    FooterComponent,
    PublicationComponent,
    DemandeSangComponent,
    EvenementComponent,
    PublierComponent,
     AppComponent,
    LoginComponent,
    RegisterComponent,
    EmailComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LandingPageComponent,
    LoginFortComponent,
    RegisterFortComponent,
    NavComponent,
    MajidComponent
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AngularFireModule.initializeApp(config),
     routes
  ],
  providers: [CategoriesService,CategoriesService,
   HttpnotificationService, ServicePubService,EventServiceService,SangServiceService,HttpserviceService,HttpserviceEventService,HttpserviceSangService,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
