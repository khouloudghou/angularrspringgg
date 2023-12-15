import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Bloc} from "../../../core/Models/Bloc/bloc";
import {Router} from "@angular/router";
import {BlocService} from "../../../core/service/bloc/bloc.service";
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";
import {Chambre} from "../../../core/Models/Chambre/chambre";

@Component({
  selector: 'app-ajouter-bloc',
  templateUrl: './ajouter-bloc.component.html',
  styleUrls: ['./ajouter-bloc.component.css']
})
export class AjouterBlocComponent implements OnInit{
  listBloc: Bloc[] = [];
  l!: number;

  constructor(private chambreS : ChambreService, private blocS: BlocService) {}

  ngOnInit() {
    this.refreshBlocList();
  }

  addBloc(formBloc: NgForm) {
    console.log('Form values:', formBloc.value);

    const nouveauBloc: Bloc = {
      idBloc: formBloc.value.idBloc,
      nomBloc: formBloc.value.nomBloc,
      capaciteBloc: formBloc.value.capaciteBloc,
    };
    console.log('Nouveau bloc:', nouveauBloc);

    this.blocS.ajouterBloc(nouveauBloc).subscribe(() => {
      console.log('Bloc ajouté avec succès');
      this.refreshBlocList();
      formBloc.resetForm();
    });
  }
  private refreshBlocList() {
    this.blocS.getAllBlocs().subscribe((data) => (this.listBloc = data));
  }
}
