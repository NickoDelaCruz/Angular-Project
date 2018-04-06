import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//firebase modules
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// Hollywoodvideo
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';


// Store


// Game Crazy
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';


//Extra Pages
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component';
import { GamecrazyComponent } from './components/gamecrazy/gamecrazy.component';
import { CartComponent } from './components/cart/cart.component';



//Configure firebase
export const firebaseConfig = {
  apiKey: firebaseApiKey.apiKey,
  authDomain: firebaseApiKey.authDomain,
  databaseURL: firebaseApiKey.databaseURL,
  storageBucket: firebaseApiKey.storageBucket
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieComponent,
    ContactComponent,
    GamecrazyComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
