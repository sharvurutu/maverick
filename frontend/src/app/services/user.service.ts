import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { cModel } from "../model/cat";
import { User } from "../model/user.model";
import { AuthenticationModel } from "../model/authentication.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable()
export class UserService {
  userId;
  api;
  user: User;
  authenticationModel: AuthenticationModel;
  constructor(private http: HttpClient) {}
  public registerUser(user): Observable<User> {
    console.log("user is here ", user);
    return this.http.post<User>("http://maverick.stackroute.in:9097/addUser", user);
  }
  public registerprofileUser(user): Observable<User> {
    return this.http.post<User>("http://maverick.stackroute.in:9097/api/v1/addUser", user);
  }
  public loginUser(authenticationModel): Observable<AuthenticationModel> {
    return this.http.post<AuthenticationModel>(
      "http://maverick.stackroute.in:9097/api/q1/auth",
      authenticationModel
    );
  }
  public logoutUser(userEmail): Observable<any> {
    return this.http.post<string>(
      "http://maverick.stackroute.in:9097/api/q1/logout",
      userEmail
    );
  }
  public getAllCategories(): Observable<any> {
    return this.http.get("http://maverick.stackroute.in:9097/api/q1/getallCategories");
  }
  public sendSelectedCategories(id, selectedCategoriesList): Observable<any> {
    return this.http.post(
      "http://maverick.stackroute.in:9097/api/q1/addSelectedCategories/" + id,
      selectedCategoriesList
    );
  }
  public getUserByEmail(email): Observable<User> {
    return this.http.get<User>(
      "http://maverick.stackroute.in:9097/api/q1/getUserByEmail/" + email
    );
  }

  grafna() {
    return this.http.get("http://maverick.stackroute.in:3000/?orgId=1");
  }
  produceUserId(id) {
    this.userId = id;
    return this.http.get("http://maverick.stackroute.in:9097/api/q1/produceUserId/" + id);
  }
  getUserId() {
    return this.userId;
  }
}
