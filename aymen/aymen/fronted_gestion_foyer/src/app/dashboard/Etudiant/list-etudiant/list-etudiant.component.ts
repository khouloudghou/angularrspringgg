import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";


@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements  OnInit {
  listEtud: Etudiant [] =[] ;
  filteredList: Etudiant[] = [];
  searchTerm: string = '';

  constructor(private route : Router , private etudiantS : EtudiantService) {
  }
  ngOnInit() {
     this.etudiantS.getStudents().subscribe(aymen=>{
         this.listEtud=aymen ;
     this.filteredList=this.listEtud;});
  }

  delete(id:number){
    this.etudiantS.deleteById(id).subscribe(()=>{this.ngOnInit()

    });
  }
  onSearch() {
    let searchTerm: string;
    if (this.searchTerm.trim() === '') {
      // Si l'input est vide, afficher tous les étudiants
      this.filteredList = this.listEtud.slice();
    } else {
      // Filtrer les étudiants dont le nom contient la chaîne de recherche (insensible à la casse)
      this.filteredList = this.listEtud.filter(etudiant =>
        etudiant.nom.toLowerCase().includes(this.searchTerm.toLowerCase())||
        etudiant.id.toString().includes(searchTerm)
      );
    }
  }







}
