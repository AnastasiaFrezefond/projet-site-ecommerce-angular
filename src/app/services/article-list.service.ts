import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ArticleListService {

  url = "https://quiet-spire-38494.herokuapp.com/articles";

  constructor(private http : HttpClient) { }

  getAllArticles()
  {
    return this.http.get(this.url);
  }

  getArticleById(id)
  {
    return this.http.get(this.url+"/"+id);
  }

}
