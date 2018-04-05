import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movie/movie.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
