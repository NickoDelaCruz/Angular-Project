import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Agame } from './game.model';

@Injectable()
export class GameService {

  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }

  getProperties() {
    return this.games;
  }

  addProperty(newGame: Agame) {
    this.games.push(newGame);
  }

  getPropertyByKey(gameId: string) {
    return this.database.object('games/' + gameId);
  }

  removeListing(gameId) {
    this.database.object(`/games/${gameId}`).remove();
  }

}
