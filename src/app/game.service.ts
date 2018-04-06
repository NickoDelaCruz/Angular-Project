import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Agame } from './game.model';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }
}
