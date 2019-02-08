import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AdaptiveService } from "../../../services/reporting-adaptive.service";
import { AdaptiveActivity } from "../../../model/adaptive-activity";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-adaptive",
  templateUrl: "./adaptive.component.html",
  styleUrls: ["./adaptive.component.scss"]
})
export class AdaptiveComponent implements OnInit {
  adaptive: AdaptiveActivity[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpclient: HttpClient,
    private adaptiveService: AdaptiveService
  ) {}

  ngOnInit() {
    this.getAdaptiveReports();
  }
  getAdaptiveReports() {
    this.adaptiveService.showAdaptiveGameReports().subscribe(adaptive => {
      this.adaptive = adaptive;
      console.log("adaptive data ======>", adaptive);
    });
  }
}
