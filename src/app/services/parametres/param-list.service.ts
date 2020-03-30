import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParamListService {

  private _url : string = "https://quiet-spire-38494.herokuapp.com/parametres";

  constructor(private http : HttpClient) { }

  // On va lister nos différentes méthodes :

  // Récupérer tous les paramètres
  getAllParams()
  {
    return this.http.get(this._url);
  }

  // Récupérer un paramètre
  getParamById(id)
  {
    return this.http.get(this._url+"/"+id);
  }

  // Ajouter un nouveau paramètre
  createParam(post)
  {
    return this.http.post(this._url,JSON.stringify(post));
  }

  // Supprimer un paramètre
  deleteParam(id)
  {
    return this.http.delete(this._url + `/${id}`);
  }

  // Mettre à jour un paramètre
  updateParam(post)
  {
  return this.http.put(this._url + `/${post.id}`,JSON.stringify(post));
  }

}
