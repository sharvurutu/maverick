import { MultiGame } from './../model/multiplayer.model';
import { GameManager } from './../model/game-manager-model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { GameService } from "../services/game.service";

@Component({
  selector: 'sn-all-games-inside-topic',
  templateUrl: './all-games-inside-topic.component.html',
  styleUrls: ['./all-games-inside-topic.component.scss']
})
export class AllGamesInsideTopicComponent implements OnInit {


  categoryId: number;
  topicName: string;
  game: GameManager[];
  //game: any[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private gameService: GameService,
  ) {}

  

  ngOnInit() {
   this.getTopicGames();
  }


  getTopicGames(){
    this.route.queryParams.subscribe(
      params => {
        this.categoryId = +params.categoryId;
        this.topicName = params.topicName;
      });
     this.gameService.getGames(this.categoryId,this.topicName)
         .subscribe(
          (data: any) =>{
              this.game = data;
           });   
         
         console.log('games...' + this.game);
  }

  goBack() {
    this.location.back();
  }

  delete(id: any) {
    this.gameService.deleteGame(id).subscribe();
  }
}