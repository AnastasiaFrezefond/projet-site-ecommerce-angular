import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private _url : string = "https://quiet-spire-38494.herokuapp.com/utilisateurs";

  constructor(private http : HttpClient) { }

  // On va lister nos différentes méthodes :

    // Récupérer tous les utilisateurs
    getAllUtilisateurs()
    {
      return this.http.get(this._url);
    }

    // Récupérer un utilisateur
    getUtilisateurById(id)
    {
      return this.http.get(this._url+"/"+id);
    }

    // Ajouter un nouvel utilisateur
    createUtilisateur(post)
    {
      return this.http.post(this._url,JSON.stringify(post));
    }

    // Supprimer un utilisateur
    deleteUtilisateur(id)
    {
      return this.http.delete(this._url + `/${id}`);
    }

    // Mettre à jour un utilisateur
    updateUtilisateur(post)
    {
    return this.http.put(this._url + `/${post.id}`,JSON.stringify(post));
    }

}




