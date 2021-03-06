import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ArticleListService } from "../../services/articles/article-list.service";
import { CommentairesService } from "../../services/commentaires/commentaires.service";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article;

  constructor(
      private router : ActivatedRoute ,
      private service : ArticleListService,
      private commentaireService : CommentairesService
  ){ }

  ngOnInit(): void {

    this.router.paramMap.subscribe( (params) =>{

      const id = params.get("id");
      console.log(id)
      this.service.getArticleById(id)
      .subscribe( (response : Response) => {
        this.article = response;
        console.log(this.article);
      })
    })

  }
}
