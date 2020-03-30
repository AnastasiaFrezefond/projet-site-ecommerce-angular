import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ArticleListService } from "../../../services/articles/article-list.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})

export class ModifierArticleComponent implements OnInit {

  article;
  articleForm;

 constructor(
    private service: ArticleListService,
    private router : ActivatedRoute,
    private formBuilder : FormBuilder){
        this.articleForm = this.formBuilder.group({
          'titre': '',
          'contenu':'',
          'published': 'true',
          'nomAuteur':'defaut',
          'emailAuteur':'defaut@google.com',
        })
    }

  ngOnInit(){
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

  onUpdateArticle(article){
      this.service.updateArticle(article)
        .subscribe((response : Response) => {
          console.log(response);
          article.title = article.title + " Modifié!";
        })
  }

}
