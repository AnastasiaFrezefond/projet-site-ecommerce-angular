import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/articles/article-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})

export class AjouterArticleComponent implements OnInit {

  private _articles;
  articleListe;

  // J'injecte mon service ArticleListService
  constructor(private service: ArticleListService, private router: Router) {
    this.articleListe = service.getAllArticles();
  }

    // Afficher les articles
    ngOnInit() {
      this.service.getAllArticles()
      .subscribe( (response : Response) => {
        //console.log(response)
        this._articles = response ;
      });
    }

    // Créer un nouvel article
    onSubmitArticle(f)
    {
    //console.log(f.value)
    const article = f.value;
    this.service.createArticle(article)
      .subscribe((response : Response) => {
        // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
        // console.log(response);
        article["id"] = response['id']
        this._articles.splice(0,0,article) ;
      })
    }

    // Supprimer article
    onDeleteArticle(article)
    {
    this.service.deleteArticle(article.id)
      .subscribe((response : Response) => {
        // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder

        console.log(response);
        let index = this._articles.indexOf(article);
        this._articles.splice(index,1) ;
      })
  }

    // Update
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
