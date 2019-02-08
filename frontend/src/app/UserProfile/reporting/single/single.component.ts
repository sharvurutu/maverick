import { Component, OnInit } from "@angular/core";
import { SingleActivity } from "../../../model/single-activity";
import { HttpClient } from "@angular/common/http";
import { SingleService } from "../../../services/reporting-single.service.";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-single",
  templateUrl: "./single.component.html",
  styleUrls: ["./single.component.scss"]
})
export class SingleComponent implements OnInit {
  record: any;

  questionId: [0, 1, 2, 3, 4, 5, 6, 7];
  ques;
  public now: Date = new Date();
  reports: SingleActivity[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpclient: HttpClient,
    private singleService: SingleService
  ) {}

  ngOnInit() {
    this.getReports();
  }
  getReports() {
    this.singleService.showGameReports().subscribe(reports => {
      this.reports = reports;
      console.log("data======>>>>", reports);
      for (let index = 0; index < reports.length; index++) {
        const element = reports[index];
        console.log("element==>", element);
        console.log("gamedetails==>", element.gameSessionDetails);

        const element1 = element.gameSessionDetails;
        console.log("multiSessionActivity==>", element1.sessionActivity);
        console.log("question==>", element1.sessionActivity.question);
        for (
          let index = 0;
          index < element1.sessionActivity.question.length;
          index++
        ) {
          const element2 = element1.sessionActivity.question[index];
          console.log("element2===>", element2.question);
        }
      }
    });
  }
}
