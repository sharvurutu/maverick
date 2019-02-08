import { Game } from './../model/game.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { GameService } from "../services/game.service";

@Component({
  selector: 'sn-update-delete-game',
  templateUrl: './update-delete-game.component.html',
  styleUrls: ['./update-delete-game.component.scss']
})
export class UpdateDeleteGameComponent implements OnInit {


  categoryId: number;
  topicName: string;
  gameName: string;
  gameId : number;
  game: Game;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private gameService: GameService,
  ) {}

  

  ngOnInit() {
   this.getGames();
  }

  getGames() {
    this.route.queryParams.subscribe(params => {
      
      this.gameId = params.gameId;  
    });
    this.gameService.getGameById( this.gameId)
      .subscribe(game => (this.game = game));
  }

  delete(game: Game){
    this.route.queryParams.subscribe(params => {
      this.gameId = params.gameId;  
    });
    this.gameService.deleteGame( this.gameId)
        .subscribe(() => this.goBack());
  }


  save(game: Game){
    this.route.queryParams.subscribe(params => {
      this.categoryId= params.categoryId;
      this.topicName = params.topicName;
    });
    this.gameService.updateGame( this.gameId, game)
        .subscribe(() => this.goBack);
  }

  goBack() {
    this.location.back();
  }

}