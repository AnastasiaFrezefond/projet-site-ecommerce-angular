import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/articles/article-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})

export class AjouterArticleComponent implements OnInit {

  _articles;
  articleListe;

  // J'injecte mon service ArticleListService
  constructor(private service: ArticleListService, private router: Router) {}

    ngOnInit() { }

    onSubmitArticle(f){
    const article = f.value;
    console.log(f)
    this.service.createArticle(article)
      .subscribe((response : Response) => {
        // console.log(response);
        article["id"] = response['id']
        this._articles.splice(0,0,article) ;
      })
    }

}
