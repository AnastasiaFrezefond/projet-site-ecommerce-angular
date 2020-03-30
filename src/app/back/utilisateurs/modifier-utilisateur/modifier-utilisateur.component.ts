import { Component, OnInit } from '@angular/core';
import { UserListService } from "../../../services/utilisateurs/user-list.service";
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {

  utilisateur;
  utilisateurForm;

  constructor(
    private service: UserListService,
    private router : ActivatedRoute,
    private formBuilder : FormBuilder){}

  ngOnInit(){
    this.router.paramMap.subscribe( (params) =>{

      const id = params.get("id");
      console.log(id)
      this.service.getUtilisateurById(id)
      .subscribe( (response : Response) => {
        this.utilisateur = response;
        console.log(this.utilisateur);
      })
    })
  }

  onUpdate(utilisateur){
      this.service.updateUtilisateur(utilisateur)
        .subscribe((response : Response) => {
          console.log(response);
          utilisateur.nom = utilisateur.nom+ " Modifié!";
        })
  }

}




