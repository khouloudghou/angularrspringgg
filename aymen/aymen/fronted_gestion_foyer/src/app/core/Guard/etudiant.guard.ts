import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {Role} from "../Models/Role/role";

@Injectable({
  providedIn: 'root'
})
export class EtudiantGuard implements CanActivate {

   etudiant=JSON.parse(localStorage.getItem("etudiant")!)

  constructor(private route : Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.etudiant.Role ==Role.ETUDIANT)
      return true ;
    else {
      this.route.navigateByUrl('/**')
      return false ;
    }
  }

}
