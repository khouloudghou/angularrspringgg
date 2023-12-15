import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Bloc} from "../../Models/Bloc/bloc";

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private baseUrl = 'http://localhost:8081/bloc';
  constructor(private http : HttpClient) { }

  ajouterBloc(bloc : Bloc){
    return this.http.post<Bloc>(this.baseUrl + "/AddBloc" ,bloc) ;
  }

  getAllBlocs(){
    return this.http.get<Bloc[]>(this.baseUrl + '/GetAllBlocs');
  }

  affecterBlocAFoyer(idBloc : number , idFoyer : number){
    return this.http.put<Bloc>(this.baseUrl +'/affecterBlocAFoyer' + idBloc + '/' +idFoyer ,this.httpOption  ) ;
  }

  findBlocnonaffect(){
    return  this.http.get<Bloc>(this.baseUrl +"/findFbyBloc");
  }

}
