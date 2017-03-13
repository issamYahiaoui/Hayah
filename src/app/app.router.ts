import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EmailComponent } from './components/user/email/email.component';
import { HomeComponent } from './components/user/home/home.component';
import { AuthGuard } from './auth.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginFortComponent } from './components/login-fort/login-fort.component';
import { RegisterFortComponent } from './components/register-fort/register-fort.component';

export const router: Routes = [

   { path: '', component : LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'register-fort', component: RegisterFortComponent },
    { path: 'login-fort', component: LoginFortComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
  

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);