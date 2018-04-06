import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MovieComponent } from './components/movie/movie.component';
import { ContactComponent } from './components/contact/contact.component';
import { GamecrazyComponent } from './components/gamecrazy/gamecrazy.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieComponent,
    ContactComponent,
    GamecrazyComponent
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
