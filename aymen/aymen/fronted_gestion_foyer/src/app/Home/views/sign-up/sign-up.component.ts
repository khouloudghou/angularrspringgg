import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenService} from "../../../core/service/Authentification/authen.service";
import {Router} from "@angular/router";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  formSignUp! : FormGroup;
  id!:number;
  listEtud: Etudiant [] =[] ;

constructor(private authentication : AuthenService , private route : Router , private fb : FormBuilder) {}
   ngOnInit() {
     this.formSignUp=this.fb.group({
       nom : this.fb.control("", Validators.required),
       prenom :this.fb.control("", Validators.required),
       cin :this.fb.control("", Validators.required),
       dateNaissance :this.fb.control("", Validators.required),
       ecole :this.fb.control("", Validators.required),
       email :this.fb.control("",Validators.required),
       password :this.fb.control("",Validators.required)
     })
   }

  SignUp() {
    if (this.formSignUp.valid) {
      const emailToCheck = this.formSignUp.value.email;

      // Effectuer la vérification d'e-mail existant
      this.authentication.checkEmailExists(emailToCheck).subscribe(emailExists => {
        if (emailExists) {
          // L'e-mail existe déjà, affichez un message d'erreur ou effectuez une action appropriée
          Swal.fire({
            icon: 'error',
            title: 'Cet e-mail existe déjà!',
          });
        } else {
          // L'e-mail n'existe pas, ajoutez l'étudiant
          this.authentication.ajouterEtudiant(this.formSignUp.value).subscribe(response => {
            console.log('saved');
            const studentName = response.nom;
            // Utilisez SweetAlert pour afficher une alerte
            Swal.fire({
              icon: 'success',
              title: `Bienvenue, ${studentName}!`,
              text: 'Connecter à votre compte.',
              showConfirmButton: false,
              timer: 2000
            });
            this.route.navigate(['/signIn']);

          });
        }
      });
    } else {
      // Utilisez SweetAlert pour afficher une alerte en cas de formulaire invalide
      Swal.fire({
        icon: 'error',
        title: 'Veuillez remplir tous les champs correctement!',
      });
    }
  }


}
