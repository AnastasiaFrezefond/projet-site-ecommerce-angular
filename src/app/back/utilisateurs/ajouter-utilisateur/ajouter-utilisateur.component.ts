import { Component, OnInit } from '@angular/core';
import { UserListService } from "../../../services/utilisateurs/user-list.service";
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {

  utilisateurForm;

  // J'injecte mon service UserListService
  constructor(
    private service: UserListService,
    private router: Router,
    private formBuilder : FormBuilder){}

  ngOnInit() {}

  onSubmitUtilisateurs(f){
    const article = f;
    console.log(f)
    this.service.createUtilisateur(f)
      .subscribe((response : Response) => {
        // console.log(response);
        article["id"] = response['id']
      })
    }

}
