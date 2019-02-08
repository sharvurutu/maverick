import { Component, OnInit, Inject, Input, NgModule } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { UserProfileService } from "../../services/user-profile.service";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";
import { User } from "../../model/UserProfile";
import { RecommendationService } from "../../recommendation.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "sn-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  //sessionStorage properties allow to save key/value pairs in a web browser
  email = sessionStorage.getItem("userEmail");
  uId: any;
  user: User[][];
  testUser: any;
  totalDataNumber: number = 0;
  u = this.userService.getById;
  likeGames: any;
  percent: number;
  //As the constructor is initialised by the JavaScript engine, and TypeScript allows us
  //to tell Angular what dependencies we require to be mapped against a specific property
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserProfileService,
    private recommendationService: RecommendationService
  ) {}
  movies: any;

  //as user profile page loads, it fetches data with respect to that email (Unique ID here).
  ngOnInit() {
    this.getUserByEmail(this.email);
    this.showFavorites();
    this.getProfilePercent(this.email);
  }

  showFavorites() {
    this.recommendationService.getAll1().subscribe(data => {
      this.likeGames = data;
    });
  }

  //functionality of fetching user data with respect to that email (Unique ID here).
  getUserByEmail(email) {
    this.userService.getById(email).subscribe(data => {
      this.user = Array.of(data);
      this.testUser = data;
      console.log("User data = = = = = == = = = = = = ", this.testUser);
      console.log("test data===" + this.testUser.password);
    });
  }

  getProfilePercent(email) {
    this.userService.profilePercent(email).subscribe(incoming => {
      console.log("Itna percent pahuncha h -----------> > >  > > ", incoming);
      return (this.percent = 100 - incoming);
    });
  }
}