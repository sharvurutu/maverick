import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Headers, Response, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Search } from "../model/search";

@Injectable()
export class SearchService {
  private searchurl = "http://maverick.stackroute.in:9096/maverick/search/";
  private searchresulturl = "http://maverick.stackroute.in:9096/maverick/searchresult/";
  constructor(private http: HttpClient) {}

  searchGames(term: string) {
    return this.http.get(this.searchurl + term);
  }

  searchResult(term: string) {
    return this.http.get<Search[]>(this.searchresulturl + term);
  }
}
