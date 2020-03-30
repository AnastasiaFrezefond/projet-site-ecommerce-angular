import { Component, OnInit } from '@angular/core';
import { UserListService } from "../../services/utilisateurs/user-list.service";
import { ArticleListService } from "../../services/articles/article-list.service";
import { ParamListService } from "../../services/parametres/param-list.service";
import { CommentairesService } from "../../services/commentaires/commentaires.service";

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
  commentaires;
  nbCommentaires;

  constructor(
    private articleService : ArticleListService,
    private utilisateurService : UserListService,
    private parametreService : ParamListService,
    private commentaireService : CommentairesService
  ) { }

  ngOnInit(): void {

    this.articleService.getAllArticles().subscribe((res: Response) => {
        this.articles = res;
        this.nbArticles = this.articles.length; });

    this.utilisateurService.getAllUtilisateurs().subscribe((res: Response) => {
        this.utilisateurs = res;
        this.nbUtilisateurs = this.utilisateurs.length; });

    this.parametreService.getAllParams().subscribe((res: Response) => {
        this.parametres = res;
        this.nbParametres = this.parametres.length; });

    this.commentaireService.getAllCommentaires().subscribe((res: Response) => {
        this.commentaires = res;
        this.nbCommentaires = this.commentaires.length; });
  }

}
