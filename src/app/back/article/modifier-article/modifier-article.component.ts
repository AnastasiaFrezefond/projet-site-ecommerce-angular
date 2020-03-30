import { Component, OnInit } from '@angular/core';
import { ArticleListService } from "../../../services/article-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})

export class ModifierArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
