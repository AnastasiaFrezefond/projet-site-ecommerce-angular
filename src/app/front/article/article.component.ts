import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ArticleListService } from "../../services/article-list.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article;

  constructor(
      private router : ActivatedRoute ,
      private service : ArticleListService)
  { }

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
