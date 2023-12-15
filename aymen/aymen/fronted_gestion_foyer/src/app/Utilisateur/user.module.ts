import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {EtudiantComponent} from "./Interface_principale/etudiant/etudiant.component";
import { UniversiteComponent } from './Universite/universite/universite.component';


@NgModule({
  declarations: [
    EtudiantComponent,
    UniversiteComponent


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,

  ]
})
export class UserModule { }
