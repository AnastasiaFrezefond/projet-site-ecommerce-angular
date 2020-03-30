import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/article-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})

export class AjouterArticleComponent implements OnInit {

  _articles;
  articleListe;

  // J'injecte mon service et je le nomme ArticleListService
  constructor(private service: ArticleListService, private router: Router) {
    this.articleListe = service.getAllArticles();
  }

  ngOnInit(): void {
    // J'appelle la méthode getAllArticles() que j'ai défini dans mon service ts
    // initialisation de ma variable _articles déclarée en haut
    this.service.getAllArticles().subscribe((response: Response) => {
    this._articles = response;
    });
  }

  onSubmitArticle(f){
    const article = f.value;
    this.service.createArticle(article).subscribe((res: Response) => {
      article["_id"] = res["_id"];
      this._articles.splice(0, 0, article);
    });
  }

  fresetForm(){
    this.router.navigate(["/admin/article"]);
    this.ngOnInit();
  }

}
