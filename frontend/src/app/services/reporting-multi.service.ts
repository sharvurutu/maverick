import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { MultiActivity } from "../model/multi-activity";

const httpOptions = {
  headers: new HttpHeaders({ "content-type": "application.json" })
};

@Injectable()
export class MultiService {
  constructor(private http: HttpClient) {}
  showMultiGameReports(): Observable<MultiActivity[]> {
    return this.http.get<MultiActivity[]>("http://maverick.stackroute.in:9099/api/v1/Multi");
  }
}
