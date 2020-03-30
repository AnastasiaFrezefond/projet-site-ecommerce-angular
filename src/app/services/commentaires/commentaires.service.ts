import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  private _url : string = "https://quiet-spire-38494.herokuapp.com/commentaires";

  constructor(private http : HttpClient) { }

  // On va lister nos différentes méthodes :

    // Récupérer tous les commentaires
    getAllCommentaires()
    {
      return this.http.get(this._url);
    }

    // Récupérer un commentaire
    getCommentaireById(id)
    {
      return this.http.get(this._url+"/"+id);
    }

    // Ajouter un nouveau commentaire
    createCommentaire(post)
    {
      return this.http.post(this._url,JSON.stringify(post));
    }

    // Supprimer un commentaire
    deleteCommentaire(id)
    {
      return this.http.delete(this._url + `/${id}`);
    }

    // Mettre à jour un commentaire
    updateCommentaire(post)
    {
    return this.http.put(this._url + `/${post.id}`,JSON.stringify(post));
    }

}
