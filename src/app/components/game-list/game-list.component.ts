import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  games: FirebaseListObservable<any[]>;
  currentRoute: string = this.route.url;

  constructor(private gameService: GameService, private route: Router) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  details(game) {
    this.route.navigate(['games', game.$key]);
  }

}
