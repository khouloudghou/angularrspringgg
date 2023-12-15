import {Component, OnInit} from '@angular/core';
import {Universite} from "../../../core/Models/Universite/universite";
import {UniversiteService} from "../../../core/service/Universite/universite.service";
import {NgForm} from "@angular/forms";
import {Chambre} from "../../../core/Models/Chambre/chambre";
import Swal from "sweetalert2";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";
import {FoyerService} from "../../../core/service/Foyer/foyer.service";

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit{
  listUniv :Universite [] =[] ;

  i!: any;
  constructor(private univS : UniversiteService , private foyerS : FoyerService) {
  }

  ngOnInit() {
    this.refreshUniversite();
  }

  refreshUniversite(){
    this.univS.GetAllUniversite().subscribe((khouloud)=>this.listUniv=khouloud);

  }
  addUniv(formUniversite: NgForm) {
    const universite: Universite = {
      idUniversite: formUniversite.value.idUniversite,
      nomUniversite: formUniversite.value.nomUniversite,
      adresse: formUniversite.value.adresse,
    }

    this.univS.ajouterUniversite(universite).subscribe(() => {
      // Utiliser SweetAlert2 pour afficher une alerte de succès
      Swal.fire({
        icon: 'success',
        title: 'Université ajoutée avec succès!',
        showConfirmButton: false,
        timer: 2000
      });
      // Actualiser les universités après avoir ajouté avec succès
      this.refreshUniversite();
    });
    formUniversite.resetForm();
  }

  // delete(id: number , i: any) {
  //   console.log(id);
  //   if (window.confirm('Do you want to go ahead?')) {
  //     this.univS.deleteUniv(id).subscribe(() => {
  //       this.listUniv.splice(i, 1);
  //     });
  //   }
  // }

  delete(id: number, i: any) {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to go ahead?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.univS.deleteUniv(id).subscribe(() => {
          this.listUniv.splice(i, 1);
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success'
          });
        });
      }
    });
  }
}
