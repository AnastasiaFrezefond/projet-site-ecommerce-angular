import { Component, OnInit } from '@angular/core';
import { UserListService } from "../../services/user-list.service";
import { ArticleListService } from "../../services/article-list.service";
import { ParamListService } from "../../services/param-list.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articles;
  nbArticles;
  utilisateurs;
  nbUtilisateurs;
  parametres;
  nbParametres;

  constructor(private articleService : ArticleListService, private utilisateursService : UserListService, private parametreService : ParamListService) { }

  ngOnInit(): void {

    this.articleService.getAllArticles().subscribe((res: Response) => {
      this.articles = res;
      this.nbArticles = this.articles.length; });

    this.utilisateursService.getAllUtilisateurs().subscribe((res: Response) => {
        this.utilisateurs = res;
        this.nbUtilisateurs = this.utilisateurs.length; });

    this.parametreService.getAllParams().subscribe((res: Response) => {
        this.parametres = res;
        this.nbParametres = this.parametres.length; });
}
}
