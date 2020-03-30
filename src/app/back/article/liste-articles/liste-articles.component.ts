import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/article-list.service";

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {

  articles ;
  constructor(private service : ArticleListService) { }

  ngOnInit(): void {
    this.service.getAllArticles()
      .subscribe( (response : Response) => {
        this.articles = response;
      })
  }

}
