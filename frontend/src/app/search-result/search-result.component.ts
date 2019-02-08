import { Component, OnInit } from "@angular/core";
import { Search } from "../model/search";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { SearchService } from "../services/searchService";
import { RecommendationService } from "../recommendation.service";

@Component({
  selector: "sn-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})
export class SearchResultComponent implements OnInit {
  result: Search[];
  gameName: string;

  constructor(
    private route: ActivatedRoute,
    private service: SearchService,
    public sanitizer: DomSanitizer,
    private router:Router,
    private recommendationService: RecommendationService
  ) {}

  ngOnInit() {
    this.getGame();
  }

  // getGame() {
  //   this.service.searchResult(this.route.snapshot.paramMap.get("gameName"))
  //     .subscribe(result => (this.result = result));
  // }

  getGame() {
    this.route.queryParams.subscribe(params => {
      this.gameName = params.gameName;
    });
    console.log(this.gameName);
    this.service
      .searchResult(this.gameName)
      .subscribe(result => (this.result = result));
  }

  routeToQuiz(id, game_type, game_type_id, topic_id,category_id,name) {
    console.log(game_type_id+" "+id+" "+game_type+" "+topic_id+" "+category_id);
    if (game_type_id == 1) {
      this.recommendationService
        .sendGameIdToSingleplayerEngine(id, game_type, game_type_id, topic_id)
        .subscribe(data => {
          console.log("done");
        });
      this.router.navigate(["/quiz"]);
    }
    if (game_type_id == 2) {
      this.recommendationService
        .sendGameIdToMultiplayerEngine(id, game_type, game_type_id, topic_id)
        .subscribe(data => {
          console.log("done");
        });
      this.router.navigate(["/multiquiz"]);
    }
    if (game_type_id == 3) {
      this.recommendationService
        .sendGameIdToAdaptiveEngine(id, topic_id,category_id,name)
        .subscribe(data => {
          console.log("done"); 
        });
      this.router.navigate(["/adaptivequiz"]);
    }
  }
}