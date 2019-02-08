import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LoginAuthService } from "../LoginAuth/login-auth.service";
import { Observable } from "rxjs/Observable";
import { LoginUserService } from "../services/login-user.service";
import { AuthenticationModel } from "../authentication.model";
import { SearchService } from "../services/searchService";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  authenticationModel: AuthenticationModel;
  searchResult: any;
  likeGames: any;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(
    private router: Router,
    private restService: SearchService,
    private loginAuthService: LoginAuthService,
    private userService: LoginUserService
  ) {
    this.searchTerm.valueChanges
      //.debounceTime(400)
      .subscribe(data => {
        this.restService.searchGames(data).subscribe(data => {
          this.searchResult = data;
          console.log(this.searchResult);

          //sessionStorage.setItem('searchdata', this.searchResult);
        });
      });
  }

  onLogout() {
    // this.userService.loginUser()
    // .subscribe(data => {});
    console.log();
    console.log("inside logout ");
    this.loginAuthService.logout();
    // this.loggedIn.next(false);
    // this.router.navigate(['/land'])

    // this.authService.logout();
  }
  isLoggedIn$: Observable<boolean>;
  ngOnInit() {
    this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
    //authenticationModel: AuthenticationModel;
  }
}
