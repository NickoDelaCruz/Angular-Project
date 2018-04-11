import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { GameService } from '../../game.service';
import { UserComment } from '../../comment.model';

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
    this.gameService.getGameByKey(this.gameKey).subscribe(dataLastEmittedFromObserver => {
       this.gameDetail = dataLastEmittedFromObserver;);
      }

      addComment(com: string) {
      const newComment: UserComment = new UserComment(com);
      this.gameDetail.comments.push(newComment);
      this.gameService.updateComments(this.gameDetail);
      // this.toggleDisplay();
    }
}
