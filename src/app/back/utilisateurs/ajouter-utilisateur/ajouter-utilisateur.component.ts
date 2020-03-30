import { Component, OnInit } from '@angular/core';
import { UserListService } from "../../../services/utilisateurs/user-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {

  _utilisateurs;
  utilisateurListe;

  // J'injecte mon service UserListService
  constructor(private service: UserListService , private router: Router) {
    this.utilisateurListe = service.getAllUtilisateurs();
  }

  ngOnInit(): void {
    // J'appelle la méthode getAllArticles() que j'ai défini dans mon service ts
    // initialisation de ma variable _articles déclarée en haut
    this.service.getAllUtilisateurs().subscribe((response: Response) => {
    this._utilisateurs = response;
    });
  }

  onSubmitUtilisateurs(f){
    const utilisateur = f.value;
    this.service.createUtilisateur(utilisateur).subscribe((res: Response) => {
      utilisateur["_id"] = res["_id"];
      this._utilisateurs.splice(0, 0, utilisateur);
    });
  }

  fresetForm(){
    this.router.navigate(["/admin/utilisateur"]);
    this.ngOnInit();
  }

}
