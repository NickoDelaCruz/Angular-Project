import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../../game.service';

@Component({
  selector: 'app-remove-game',
  templateUrl: './remove-game.component.html',
  styleUrls: ['./remove-game.component.css'],
  providers: [GameService]
})
export class RemoveGameComponent implements OnInit {

  @Input() gameKey: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  removeGame(game) {
    this.gameService.removeGame(game.$key);
  }

}
