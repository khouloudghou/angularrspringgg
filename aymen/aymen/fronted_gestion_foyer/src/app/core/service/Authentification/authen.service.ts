import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Etudiant} from "../../Models/Etudiant/etudiant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'http://localhost:8081/auth'; // Assurez-vous de mettre le bon URL du backend ici

  ajouterEtudiant(etudiant: Etudiant) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('nom', etudiant.nom)
      .set('prenom', etudiant.prenom)
      .set('email', etudiant.email)
      .set('password', etudiant.password)
      .set('cin', etudiant.cin)
      .set('ecole', etudiant.ecole)
      .set('dateNaissance', etudiant.dateNaissance.toString()); // Assurez-vous que toString() convient au format attendu

    const url = this.baseUrl + '/registerEtudiant';

    return this.http.post<Etudiant>(url, body.toString(), { headers });
  }

  checkEmailExists(email: string) {
    // Ajoutez l'e-mail à la requête comme paramètre
    const params = new HttpParams().set('email', email);

    // Utilisez la requête HTTP GET avec les paramètres
    return this.http.get(this.baseUrl + '/checkEmailExists', { params });
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }


  }

