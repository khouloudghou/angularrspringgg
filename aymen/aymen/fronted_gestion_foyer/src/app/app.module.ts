import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateEtudiantComponent} from "./dashboard/Etudiant/update-etudiant/update-etudiant.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import { HomeComponent } from './Home/home/home.component';
import { SignInComponent } from './Home/views/sign-in/sign-in.component';
import {SignUpComponent} from "./Home/views/sign-up/sign-up.component";
import { NotFoundComponent } from './Home/views/not-found/not-found.component';
import {UserModule} from "./Utilisateur/user.module";
import {EtudiantComponent} from "./Utilisateur/Interface_principale/etudiant/etudiant.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    UserModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
