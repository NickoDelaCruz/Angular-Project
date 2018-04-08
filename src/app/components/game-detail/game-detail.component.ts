import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {

  gameKey: string;
  gameDetail;

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {
      this.gameKey = urlParameters['id'];
    });
    this.gameDetail = this.gameService.getGameByKey(this.gameKey);
  }

}
