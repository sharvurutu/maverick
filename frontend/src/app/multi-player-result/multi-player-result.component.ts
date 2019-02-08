import { Component, OnInit } from "@angular/core";
// import { MatchingUserService } from "../matching-user.service";
import { MatchingUserService } from "../services/matching-user.service";
import { Result } from "../model/multiPlayerResult";
@Component({
  selector: 'sn-multi-player-result',
  templateUrl: './multi-player-result.component.html',
  styleUrls: ['./multi-player-result.component.scss']
})
export class MultiPlayerResultComponent implements OnInit {
  result: Result;
  gameId: any;
  winnerId: any;
  winnerScore: any;
  constructor(private matchingUsersService: MatchingUserService) {}
 
  getResults() {
    this.matchingUsersService
      .finalResult()
      .subscribe(result => {
        this.result = result
        this.gameId = this.result.gameId;
        this.winnerId = this.result.userId;
        this.winnerScore = this.result.score;
      });
  }
 
  ngOnInit() {
    this.getResults();
  }
 }