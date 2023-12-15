import { Injectable } from '@angular/core';
import {Etudiant} from "../../Models/Etudiant/etudiant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
}
)
export class EtudiantService {

  // EtudiantList : Etudiant [] =[];

  httpOption={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };
  private apiUrl :string = "http://localhost:8081/etudiant";
  constructor(private http : HttpClient) { }

  getStudents () {
    return this.http.get<Etudiant[]>(this.apiUrl + '/GETAllE' );
  }

 ajouterEtudiants(e:Etudiant){
    return this.http.post<Etudiant>(this.apiUrl + '/AddEE',e);
 }

  getUserById(id:number){
    return this.http.get<Etudiant>(`${this.apiUrl}GETE/${id}`);
  }

  deleteById(id: number) {
    return this.http.delete<Etudiant>(`${this.apiUrl}/DeleteE/${id}`);
  }



}
