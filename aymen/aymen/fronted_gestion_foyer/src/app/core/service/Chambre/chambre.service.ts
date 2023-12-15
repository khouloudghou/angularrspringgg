import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chambre} from "../../Models/Chambre/chambre";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl ='http://localhost:8081/chambre' ;
  constructor(private http : HttpClient) { }

  ajouterChambre(chambre :  Chambre ){
    return this.http.post<Chambre>(this.baseUrl + "/addChambre" , chambre);
  }

  getAllChambre(){
    return this.http.get<Chambre[]>(this.baseUrl + "/GetAllChambre")
  }
}
