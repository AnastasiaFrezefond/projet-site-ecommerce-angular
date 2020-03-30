import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/articles/article-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-supprimer-article',
  templateUrl: './supprimer-article.component.html',
  styleUrls: ['./supprimer-article.component.css']
})
export class SupprimerArticleComponent implements OnInit {

  article;

  constructor(
    private service: ArticleListService,
    private router: Router) {}

  ngOnInit(): void {
  }

  onDeleteArticle(article)
  {
  this.service.deleteArticle(article.id)
    .subscribe((response : Response) => {
      console.log(response);
    })
  }

}
