import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';

import { ArticleListService } from "./services/article-list.service";
import { ArticleComponent } from './front/article/article.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';
import { ListeComponent } from './back/article/liste/liste.component';

import { UserListService } from "./services/user-list.service";

import { DashboardComponent } from './back/dashboard/dashboard.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    AjouterComponent,
    ListeComponent,
    DashboardComponent,
    MenuDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path : "" , component : AccueilComponent},

        { path : "article/:id" , component : ArticleComponent},
        { path : "admin/article/liste" , component : ListeComponent },
        { path : "admin/article/ajouter" , component : AjouterComponent },

        { path : "utilisateurs/:id" , component : ArticleComponent},
        { path : "admin/utilisateurs/liste" , component : ListeComponent },
        { path : "admin/utilisateurs/ajouter" , component : AjouterComponent },

        { path : "admin" , component : DashboardComponent }
      ]
    ),
    HttpClientModule
  ],
  providers: [ArticleListService, UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
