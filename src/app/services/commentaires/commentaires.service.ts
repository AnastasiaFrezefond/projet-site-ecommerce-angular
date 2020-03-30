import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  private _url : string = "https://quiet-spire-38494.herokuapp.com/commentaires";

  constructor(private http : HttpClient) { }

  // On va lister nos différentes méthodes :

    // Récupérer tous les utilisateurs
    getAllCommentaires()
    {
      return this.http.get(this._url);
    }

    // Récupérer un utilisateur
    getCommentaireById(id)
    {
      return this.http.get(this._url+"/"+id);
    }

    // Ajouter un nouvel utilisateur
    createCommentaire(post)
    {
      return this.http.post(this._url,JSON.stringify(post));
    }

    // Supprimer un utilisateur
    deleteCommentaire(id)
    {
      return this.http.delete(this._url + `/${id}`);
    }

    // Mettre à jour un utilisateur
    updateCommentaire(post)
    {
    return this.http.put(this._url + `/${post.id}`,JSON.stringify(post));
    }

}
