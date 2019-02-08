import { Component, OnInit } from '@angular/core';
import { AdaptiveService } from '../services/adaptive.service';

import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'sn-adaptive-result',
  templateUrl: './adaptive-result.component.html',
  styleUrls: ['./adaptive-result.component.scss']
})
export class AdaptiveResultComponent implements OnInit {
  data:any;
  question:any[];
 
  constructor( private router: Router,
    private servic:AdaptiveService) {
     
     }

  ngOnInit() {
    this.servic.getResult().subscribe(data => {
      console.log("test="+data);
      this.data=data;
      this.question=data.response;
      console.log(this.question);
    });
  }

}
