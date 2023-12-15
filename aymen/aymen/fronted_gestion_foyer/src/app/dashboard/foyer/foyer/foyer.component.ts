import {Component, OnInit} from '@angular/core';
import {Bloc} from "../../../core/Models/Bloc/bloc";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";
import {BlocService} from "../../../core/service/bloc/bloc.service";
import {NgForm} from "@angular/forms";
import {Foyer} from "../../../core/Models/Foyer/foyer";
import {FoyerService} from "../../../core/service/Foyer/foyer.service";
import {Universite} from "../../../core/Models/Universite/universite";
import {Route, Router} from "@angular/router";
import {UniversiteService} from "../../../core/service/Universite/universite.service";

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit{
  listFoyer: Foyer[] = [];
  l!: number;
  nomUnivInput :string ='';
  UnivSF !: String;
  idFoyerInput: number=0;
  Univ : Universite [] =[] ;
  i!: number;
  searchTerm: string = '';
  showPopup: boolean = false;
  foyerToEdit: any = {};

  constructor(private FoyerS:FoyerService , private route : Router , private univS : UniversiteService) {}

  ngOnInit() {

    this.FoyerS.findUSF().subscribe((data)=>
    {this.UnivSF=data});
  }

  addFoyer(formFoyer: NgForm) {
    console.log('Form values:', formFoyer.value);

    const nouveauFoyer: Foyer = {
      idFoyer: formFoyer.value.idFoyer,
      nomFoyer: formFoyer.value.nomFoyer,
      capaciteFoyer: formFoyer.value.capaciteFoyer,
    };
    console.log('Nouveau foyer:',nouveauFoyer );

    this.FoyerS.ajouterFoyer(nouveauFoyer).subscribe(() => {
      console.log('foyer ajouté avec succès');
      this.refreshFoyerList();
      formFoyer.resetForm();
    });
  }
  private refreshFoyerList() {
    this.FoyerS.getAllFoyers().subscribe((data) => (this.listFoyer = data));
  }

  OnSelectUniversity(event: Event) {
    this.nomUnivInput=(event.target as HTMLSelectElement).value ;
  }

  affecterUnivFoyer() {
    this.univS.affecterFoyerAUniversite(this.idFoyerInput , this.nomUnivInput).subscribe(
      ()=>{
        alert('foyer affecté au universite avec succes')
      },
      (error) => {
        console.error('Erreur lors de l\'affectation des chambres au bloc', error);
      }
    )
  };

  delete(id: number, i: any) {
    if (window.confirm('Voulez-vous continuer?')) {
      this.FoyerS.deleteFoyer(id).subscribe(() => {
        // Supprimer le foyer de la liste filtrée
        this.listFoyer.splice(i, 1);
      });
    }}

    openPopup(foyer: any) {
      this.foyerToEdit = foyer;
      this.showPopup = true;
    }

    onSaveChanges(editedFoyer: any) {
      // Traitez ici les modifications sauvegardées depuis le composant de pop-up
      console.log('Modifications sauvegardées : ', editedFoyer);

      // Fermez le pop-up ou effectuez d'autres actions si nécessaire
      this.showPopup = false;
    }








}



