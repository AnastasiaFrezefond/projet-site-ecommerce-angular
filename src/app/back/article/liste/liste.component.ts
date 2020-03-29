import { Component, OnInit } from '@angular/core';

import { ArticleListService } from "../../../services/article-list.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  articles ;
  constructor(private service : ArticleListService) { }

  ngOnInit(): void {
    this.service.getAllArticles()
      .subscribe( (response : Response) => {
        this.articles = response;
      })
  }

}
