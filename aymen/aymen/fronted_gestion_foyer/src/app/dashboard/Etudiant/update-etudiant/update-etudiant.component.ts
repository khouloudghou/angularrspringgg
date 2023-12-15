import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  etudiant: Etudiant =new Etudiant();
  id!:number;
  UpdateForm = new FormGroup({
    idEtudiant:new FormControl(0),
    nomEt: new FormControl('', Validators.required),
    prenomEt: new FormControl('', Validators.required),
    cin: new FormControl('', Validators.required),
    ecole: new FormControl('', Validators.required),
    dateNaissnace: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    password : new FormControl('', Validators.required)
  })

  constructor(private studentS: EtudiantService, private ActR:ActivatedRoute, private route :Router , private formBuilder : FormBuilder) {
  }

  ngOnInit() {
    this.id=this.ActR.snapshot.params['id'];
    this.studentS.getUserById(this.id).subscribe((data)=>{
    this.etudiant=data;
    },error => console.log(error));

  }


}
