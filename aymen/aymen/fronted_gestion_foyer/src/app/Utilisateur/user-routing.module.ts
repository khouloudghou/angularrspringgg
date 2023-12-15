import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantComponent} from "./Interface_principale/etudiant/etudiant.component";
import {UniversiteComponent} from "./Universite/universite/universite.component";

const routes: Routes = [
  { path: 'etudiant', component: EtudiantComponent ,children :[
      {path:"listUniv" , component : UniversiteComponent}
    ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
