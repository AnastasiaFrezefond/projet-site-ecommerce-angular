import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/articles/article-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})

export class ModifierArticleComponent implements OnInit {

  _articles;
  articleListe;

  // J'injecte mon service ArticleListService
  constructor(private service: ArticleListService, private router: Router) {
    this.articleListe = service.getAllArticles();
  }

    ngOnInit() {
    }

    onUpdateArticle(article)
    {
      this.service.updateArticle(article)
        .subscribe((response : Response) => {
          // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder
          // par contre pas si vous essayer de modifier un article créé par vous => erreur 500
          console.log(response);
          article.title = article.title + " Modifié!";
        })
    }

}



