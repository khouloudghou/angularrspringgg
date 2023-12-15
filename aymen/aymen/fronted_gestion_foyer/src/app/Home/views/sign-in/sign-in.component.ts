import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenService} from "../../../core/service/Authentification/authen.service";

class AuthenticationService {
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formSignIn!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenService, private route: Router) {
  }


  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });
  }
  // login() {
  //   const {email, password} = this.formSignIn.value;
  //
  //   // Vérifier d'abord si l'email existe avant de tenter la connexion
  //   this.authService.checkEmailExists(email).subscribe(
  //     (emailExists) => {
  //       if (emailExists) {
  //         // L'email existe, continuez avec la connexion
  //         this.authService.login(email, password).subscribe(
  //           (response) => {
  //             console.log('Réponse du backend :', response);
  //
  //             if (response?.token && response?.user) {
  //               localStorage.setItem('token', response.token);
  //               localStorage.setItem('user', JSON.stringify(response.user));
  //
  //               const role = response.user.role;
  //
  //               if (role) {
  //                 console.log('Rôle de l\'utilisateur :', role);
  //
  //                 if (role === 'ADMIN') {
  //                   this.route.navigate(['/dashboard']);
  //                 } else if (role === 'ETUDIANT') {
  //                   this.route.navigate(['/etudiant']);
  //                 } else {
  //                   console.error('Rôle non pris en charge :', role);
  //                 }
  //               } else {
  //                 console.error('Rôle de l\'utilisateur non défini.');
  //               }
  //             } else {
  //               console.error('Réponse invalide du backend.');
  //             }
  //           },
  //           (error) => {
  //             console.error('Erreur lors de la connexion :', error);
  //             // Afficher un message d'erreur en cas d'échec de la connexion
  //             Swal.fire('Erreur', 'Vérifiez votre email ou mot de passe.', 'error');
  //           }
  //         );
  //       } else {
  //         // L'email n'existe pas, proposer de créer un compte
  //         Swal.fire({
  //           title: 'Adresse e-mail non trouvée',
  //           text: 'Voulez-vous créer un compte avec cette adresse e-mail?',
  //           icon: 'question',
  //           showCancelButton: true,
  //           confirmButtonText: 'Ressayé',
  //         }).then((result) => {
  //
  //         });
  //       }
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la vérification de l\'e-mail :', error);
  //       Swal.fire('Erreur', 'Une erreur est survenue lors de la vérification de votre email.', 'error');
  //     }
  //   );
  // }
  login() {
    const { email, password } = this.formSignIn.value;

    // Connexion directe sans vérifier l'existence de l'email
    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);

        if (response?.token && response?.user) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));

          const role = response.user.role;

          if (role) {
            console.log('Rôle de l\'utilisateur :', role);

            if (role === 'ADMIN') {
              // Rediriger l'administrateur vers le tableau de bord
              this.route.navigate(['/dashboard']);
            } else if (role === 'ETUDIANT') {
              // Rediriger l'étudiant vers la page étudiant
              this.route.navigate(['/etudiant']);
            } else {
              console.error('Rôle non pris en charge :', role);
            }
          } else {
            console.error('Rôle de l\'utilisateur non défini.');
          }
        } else {
          console.error('Réponse invalide du backend.');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
        // Afficher un message d'erreur en cas d'échec de la connexion
        Swal.fire('Erreur', 'Vérifiez votre email ou mot de passe.', 'error');
      }
    );
  }
}
