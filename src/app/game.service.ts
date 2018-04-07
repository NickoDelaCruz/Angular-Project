import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Agame } from './game.model';

@Injectable()
export class GameService {

  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }

  getGames() {
  return this.games;
  }

  addGame(newGame: Agame) {
    this.games.push(newGame);
  }

  getGameByKey(gameId: string) {
  return this.database.object('games/' + gameId);
  }



}
