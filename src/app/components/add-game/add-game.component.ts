import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { GameService } from '../../game.service';
import { Agame } from '../../game.model';
import { UserComment } from '../../comment.model';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
  providers: [GameService]
})
export class AddGameComponent implements OnInit {

  toggle: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.toggle = !this.toggle;
  }

  addGameListing(owner: string, title: string, price: string, system: string, description: string) {
    const newGame: Agame = new Agame(owner, title, price, system, description);
    const newComment: UserComment = new UserComment("");
    newGame.comments = [newComment];
    this.gameService.addGame(newGame);
    this.toggleDisplay();
  }

}
