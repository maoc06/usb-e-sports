import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'myProfile', component: ProfileComponent},
  {path: 'profiles', component: ProfilesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createProfile', component: CreateProfileComponent},
  {path: 'register', component: RegisterComponent}
  

];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProfilesComponent,
    LoginComponent,
    CreateProfileComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
