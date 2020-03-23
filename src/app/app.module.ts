import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';

import { ArticleListService } from "./services/article-list.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path : "" , component : AccueilComponent},
      ]
    ),
    HttpClientModule
  ],
  providers: [ArticleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
