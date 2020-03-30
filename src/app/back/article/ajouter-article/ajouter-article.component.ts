import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/articles/article-list.service";
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})

export class AjouterArticleComponent implements OnInit {

  articleForm;

  // J'injecte mon service ArticleListService
  constructor(
    private service: ArticleListService,
    private router: Router,
    private formBuilder : FormBuilder){
        this.articleForm = this.formBuilder.group({
          'titre': '',
          'contenu':'',
          'published': 'true',
          'nomAuteur':'defaut',
          'emailAuteur':'defaut@google.com',
        })
    }

    ngOnInit() { }

    onSubmitArticle(f){
    const article = f;
    console.log(f)
    this.service.createArticle(f)
      .subscribe((response : Response) => {
        // console.log(response);
        article["id"] = response['id']
      })
    }

}
