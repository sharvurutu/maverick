import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";
import { User } from ".././model/UserProfile";
import { UserUpdate } from ".././model/UserProfileUpdate";

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  mail: string;

  getById(userEmail: string): Observable<User[]> {
    return this.http.get<User[]>(
      "http://maverick.stackroute.in:9098/api/v1/getUserByEmail/" + userEmail
    );
  }

  public updateUser(user: UserUpdate): Observable<UserUpdate> {
    this.mail = user.email;
    return this.http.put<UserUpdate>(
      "http://maverick.stackroute.in:9098/api/v1/updateUser/" + this.mail,
      user
    );
  }

  profilePercent(userEmail: string): Observable<number> {
    return this.http.get<number>(
      "http://maverick.stackroute.in:9098/api/v1/getProfilePercent/" + userEmail
    );
  }
}
