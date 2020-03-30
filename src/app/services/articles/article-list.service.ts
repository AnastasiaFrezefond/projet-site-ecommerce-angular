import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ArticleListService {

  private _url : string = "https://quiet-spire-38494.herokuapp.com/articles";

  constructor(private http : HttpClient) { }

  // On va lister nos différentes méthodes :

  // Récupérer tous les articles
  getAllArticles()
  {
    return this.http.get(this._url);
  }

  // Récupérer un article
  getArticleById(id)
  {
    return this.http.get(this._url+"/"+id);
  }

  // Ajouter un nouvel article
  createArticle(post)
  {
    return this.http.post(this._url,JSON.stringify(post));
  }

  // Supprimer un article
  deleteArticle(id)
  {
    return this.http.delete(this._url + `/${id}`);
  }

  // Mettre à jour un article
  updateArticle(post)
  {
  return this.http.put(this._url + `/${post.id}`,JSON.stringify(post));
  }

}
