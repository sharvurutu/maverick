import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Game } from "../model/game.model";
import { MultiGame } from "../model/multiplayer.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
};
@Injectable()
export class GameService {
  url = "http://maverick.stackroute.in:9091/api/game";
  url1 = "http://maverick.stackroute.in:9091/api/game/category/mp";
  gameByIdUrl = "http://maverick.stackroute.in:9091/api/game/game1";
  showAllGamesUnderTopicUrl = "http://maverick.stackroute.in:9091/api/game/mp/category";
  deleteUrl = "http://maverick.stackroute.in:9091/api/game/deletegame";
  updateUrl = "http://maverick.stackroute.in:9091/api/game/updategame";

  game: Game;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  public createGame(categoryId, topicName, game): Observable<Game> {
    const getUrl = `${this.url}/category/${categoryId}/${topicName}`;
    return this.http.post<Game>(getUrl, game);
  }

  public createMultiGame(
    categoryId: number,
    topicName: string,
    multigame
  ): Observable<MultiGame> {
    const getUrl = `${this.url1}/${categoryId}/${topicName}`;
    return this.http.post<MultiGame>(getUrl, multigame);
  }

  public getGames(categoryId: number, topicName: string) {
    return this.http.get(
      this.showAllGamesUnderTopicUrl + "/" + categoryId + "/" + topicName
    );
  }

  getGameById(gameId: number): Observable<Game> {
    const getUrl1 = `${this.gameByIdUrl}/${gameId}`;
    return this.http.get<Game>(getUrl1);
  }

  public deleteGame(gameId: any) {
    return this.http.delete(this.deleteUrl + "/" + gameId);
  }

  public updateGame(gameId, game): Observable<Game> {
    const getUrl = `${this.updateUrl}/${gameId}`;
    return this.http.put<Game>(getUrl, game);
  }
}
