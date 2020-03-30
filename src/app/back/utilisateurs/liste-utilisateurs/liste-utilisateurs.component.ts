import { Component, OnInit } from '@angular/core';
import { UserListService } from "../../../services/utilisateurs/user-list.service";

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {

  utilisateurs ;

  constructor(private service : UserListService) { }

  ngOnInit(): void {
    this.service.getAllUtilisateurs()
      .subscribe( (response : Response) => {
        this.utilisateurs = response;
      })
  }

}
