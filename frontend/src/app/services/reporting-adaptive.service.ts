import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { AdaptiveActivity } from "../model/adaptive-activity";

const httpOptions = {
  headers: new HttpHeaders({ "content-type": "application.json" })
};

@Injectable()
export class AdaptiveService {
  constructor(private http: HttpClient) {}
  showAdaptiveGameReports(): Observable<AdaptiveActivity[]> {
    return this.http.get<AdaptiveActivity[]>(
      "http://maverick.stackroute.in:9099/api/v1/Adapt"
    );
  }
}
