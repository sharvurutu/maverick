import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../../services/user-profile.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { User } from "../../model/UserProfile";
import { UserUpdate } from "../../model/UserProfileUpdate";
import { Location } from "@angular/common";
import { MatSnackBar } from "@angular/material";

//component to initialise update user profile request.
@Component({
  selector: "sn-userupdateprofile",
  templateUrl: "./userupdateprofile.component.html",
  styleUrls: ["./userupdateprofile.component.scss"]
})
export class UserupdateprofileComponent implements OnInit {
  user: User[][];
  sub: Subscription;

  //As the constructor is initialised by the JavaScript engine, and TypeScript allows us
  //to tell Angular what dependencies we require to be mapped against a specific property
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private userService: UserProfileService,
    public snackBar: MatSnackBar
  ) {}

  //as soon as page loads, it fetches initial data from database that is preset, over which updations
  //can be implemented.
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"];
      if (id) {
        this.userService.getById(id).subscribe(data => {
          this.user = Array.of(data);
        });
      }
    });
  }

  //Actual function of updating a user profile
  updateUser(user: UserUpdate): void {
    this.userService.updateUser(user).subscribe(data => {
      console.log("ID   >>>>>>>>>", data);
    });
  }

  showSnackBar(){
    this.snackBar.open('Data Successfully Updated', 'X', { duration: 5000});
   }

  goBack() {
    this.location.back();
  }
}
