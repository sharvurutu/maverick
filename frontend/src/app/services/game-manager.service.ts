import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GameManager } from "../model/game-manager-model";

@Injectable()
export class GameManagerService {
  game:GameManager;
  url = "http://maverick.stackroute.in:9091/api/game/category";

  constructor(private http : HttpClient) { }
 
  public createGame(categoryId: number,topicName: string,game): Observable<GameManager>{
    const getUrl = `${this.url}/${categoryId}/${topicName}`;
    return this.http.post<GameManager>(getUrl,game);
    
  }

}