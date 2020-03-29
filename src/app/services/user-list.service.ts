import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  url = "https://quiet-spire-38494.herokuapp.com/utilisateurs";

  constructor(private http : HttpClient) { }

  getAllUtilisateurs()
  {
    return this.http.get(this.url);
  }

  getUtilisateurById(id)
  {
    return this.http.get(this.url+"/"+id);
  }

}
