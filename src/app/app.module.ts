import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//firebase modules
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';


// Hollywoodvideo
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';


// Store


// Game Crazy
// import { PropertyDetailComponent } from './components/game-detail/game-detail.component';
// import { AddListingComponent } from './components/add-game/add-game.component';
import { GameListComponent } from './components/gameList/gameList.component';
// import { RemoveGameComponent } from './components/remove-game/remove-game.component';



//Extra Pages
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';

//key
// import { masterFirebaseConfig } from './api-keys';

//Configure firebase
// export const firebaseConfig = {
//   apiKey: firebaseApiKey.apiKey,
//   authDomain: firebaseApiKey.authDomain,
//   databaseURL: firebaseApiKey.databaseURL,
//   storageBucket: firebaseApiKey.storageBucket
// }


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieComponent,
    ContactComponent,
    CartComponent,
    GameListComponent
    // PropertyDetailComponent,
    // RemoveListingsComponent
    // ListingsComponent,
    // AddListingComponent,
    // PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
