import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../services/articles/article-list.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  // déclaration de ma variable articles (elle va être initialisée plus bas)
  articles ;

  // J'injecte mon service et je le nomme peopleservice
  constructor(private articleservice : ArticleListService ) {
   }

  ngOnInit(): void {

    // J'appelle la méthode getAllArticles() que j'ai défini dans mon service ts
    this.articleservice.getAllArticles()
      .subscribe( (response : Response) => {
        this.articles = response;
        console.log(this.articles)
      })
  }

}

