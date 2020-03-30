import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// imports des composants du front
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';

// imports de nos différents services
import { ArticleListService } from "./services/article-list.service";
import { UserListService } from "./services/user-list.service";

// imports de nos différents composants du back office
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterArticleComponent } from './back/article/ajouter-article/ajouter-article.component';
import { ListeArticlesComponent } from './back/article/liste-articles/liste-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    DashboardComponent,
    MenuDashboardComponent,
    AjouterArticleComponent,
    ListeArticlesComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path : "" , component : AccueilComponent},

        { path : "article/:id" , component : ArticleComponent},
        { path : "admin/article/liste" , component : ListeArticlesComponent  },
        { path : "admin/article/ajouter" , component : AjouterArticleComponent},

        { path : "admin" , component : DashboardComponent }
      ]
    ),
    HttpClientModule
  ],
  providers: [ArticleListService, UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
