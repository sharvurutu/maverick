import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MultiService } from "../../../services/reporting-multi.service";
import { MultiActivity } from "../../../model/multi-activity";
import { Router, ActivatedRoute } from "@angular/router";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-multi",
  templateUrl: "./multi.component.html",
  styleUrls: ["./multi.component.scss"]
})
export class MultiComponent implements OnInit {
  multireports: MultiActivity[];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private httpclient: HttpClient,
    private multiService: MultiService
  ) {}

  ngOnInit() {
    this.getMultiGameReports();
  }

  getMultiGameReports() {
    this.multiService.showMultiGameReports().subscribe(multireports => {
      this.multireports = multireports;
      console.log("multi data ===>", multireports);
    });
  }
}
