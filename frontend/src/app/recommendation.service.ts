import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./services/user.service";
@Injectable()
export class RecommendationService {
  public API = "http://maverick.stackroute.in:9095/api/v1/recommendation/categories";
  userId: number;
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    this.userId = this.userService.getUserId();
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + "/" + this.userId);
  }

  getAll1(): Observable<any> {
    return this.http.get(
      "http://maverick.stackroute.in:9095/api/v1/recommendation/category" +
        "/" +
        this.userId
    );
  }

  get(id: string) {
    return this.http.get(
      "http://maverick.stackroute.in:9095/api/v1/recommendation/categoryGames" + "/" + id
    );
  }

  getAllGames(): Observable<any> {
    return this.http.get(
      "http://maverick.stackroute.in:9095/api/v1/recommendation/games/" + this.userId
    );
  }

  sendGameIdToSingleplayerEngine(
    id,
    game_type,
    game_type_id,
    topic_id
  ): Observable<any> {
    return this.http.get(
      "http://maverick.stackroute.in:9092/api/v1/details" +
        "/" +
        game_type_id +
        "/" +
        this.userId +
        "/" +
        id
    );
  }

  sendGameIdToMultiplayerEngine(
    id,
    game_type,
    game_type_id,
    topic_id
  ): Observable<any> {
    return this.http.get(
      "http://maverick.stackroute.in:9089/api/v1/matching" + "/" + this.userId + "/" + id
    );
  }
  sendGameIdToAdaptiveEngine(id, topic_id, category_id, name): Observable<any> {
    return this.http.get(
      "http://maverick.stackroute.in:9094/api/v1/adaptiveGameEngine/" +
        category_id +
        "/" +
        topic_id +
        "/" +
        id +
        "/" +
        this.userId +
        "/" +
        name
    );
  }
  setUserId(userId) {
    this.userId = userId;
  }
  getUserId() {
    return this.userId;
  }
  sendCar(name) {
    this.router.navigate(["/game-by-categoryId", name, this.userId]);
  }
  favCategory(category_id) {
    return this.http.get(
      "http://maverick.stackroute.in:9095/api/v1/recommendation/" +
        category_id +
        "/" +
        this.userId
    );
  }

  getCategoryUser(id): Observable<any> {
    return this.http.get(
      "http://maverick.stackroute.in:9095/api/v1/recommendation/category" + "/" + id
    );
  }
}
