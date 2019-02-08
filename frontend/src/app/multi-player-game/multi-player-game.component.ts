import { Component, SystemJsNgModuleLoader, OnInit } from "@angular/core";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";

import { MatDialog } from "@angular/material";
import { ResponseData } from "../model/responseData";
import { MultiPlayerRulesComponent } from "../multi-player-rules/multi-player-rules.component";
import { MultiPlayerService } from "../services/multi-player.service";

import { timer } from "rxjs/observable/timer"; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from "rxjs/operators";
import { MatchingUserService } from "../services/matching-user.service";
import { MatchingUsers } from "../model/matchingUser";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "sn-multi-player-game",
  templateUrl: "./multi-player-game.component.html",
  styleUrls: ["./multi-player-game.component.scss"]
})

export class MultiPlayerGameComponent implements OnInit {
  u: any[] = [];
  user1: any;
  user2: any;
  timer;
  matchingUsers: MatchingUsers[];
  matchingData: string[] = [];
  countDown;
  count: any;
  data: string[] = [];
  options: string[] = [];
  showConversation: Boolean = false;
  ws: any;

  questions: ResponseData;
  userName: string;
  questionId: string;
  questionStamp: string;
  qNumber: number;

  op1: string;
  op2: string;
  op3: string;
  op4: string;

  selectedAnswer: string;
  correctAns: any;
  startTime: number;
  totalTime: number;

  disabled: boolean;
  disableDiv = false;

  message: any;
  i = 1;
  userData: any;
  score: string[] = [];
  user: string[] = [];

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private multiPlayerService: MultiPlayerService,
    private matchingUsersService: MatchingUserService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MultiPlayerRulesComponent, {
      width: "350px",
      height: "350px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  toggleDisable() {
    this.disableDiv = !this.disableDiv;
  }

  connect() {
    const socket = new WebSocket("ws://maverick.stackroute.in:9093/greeting");
    this.ws = Stomp.over(socket);
    let that = this;
    // const userData = JSON.stringify({userId: '100'});
    this.ws.connect(
      {},
      function(frame) {
        that.ws.subscribe("/errors", function(message) {
          alert("Error " + message.body);
        });

        that.ws.subscribe("/topicQuestion/reply", function(message) {
          console.log("Response data is ==========> :" + message);
          // this.multiPlayerService.seconds = 20;
          that.showGreeting(message.body);
        });

        that.ws.subscribe("/topicResponse/reply", function(message) {
          console.log("Response data is ==========> Topic response:" + message);
          // this.multiPlayerService.seconds = 20;
          that.showUserData(message.body);
        });

        that.disabled = true;
      }

      // this function is used to show alert box when disconnect socket
      // function(error) {
      //   alert('STOMP error ' + error);
      // }
    );
  }
  disconnect() {
    this.complete();
    if (this.ws != null) {
      this.ws.ws.close();
    }
    this.setConnected(false);
    console.log("Disconnected");
  }

  sendResponse() {
    console.log("Data Send ==========>");
    const dd = JSON.stringify({
      // userId: "101",
      // questionStamp: "dummy data",
      // questionId: "110",
      // selectedResponse: "any",
      // correctAns: "any",
      // endTime: "0",
      // score: "0"
      hi: ""
    });
    console.log("First Response Send ==============>" + dd);
    this.ws.send("/app/messageOpen", {}, dd);
  }

  color;

  // changeColor() {
  //   console.log("Inside Color Change");
  //   if (this.selectedAnswer === this.correctAns) {
  //     this.color = "green";
  //   } else {
  //     this.color = "red";
  //   }
  // }

  sendAnswer(answer) {
    this.selectedAnswer = answer;
    // this.qNumber = this.i++
    console.log("Send Response : ", answer);
    const ans = JSON.stringify({
      userId: JSON.stringify(this.user2),
      questionStamp: this.questionStamp,
      questionId: this.questionId,
      selectedOption: answer,
      correctAns: this.correctAns,
      score: this.score,
      endTime: JSON.stringify(this.count)
    });
    console.log("end time =>>>>>>>>>>>>>>>>>>>>" + this.count);
    console.log("Data >>>>>>>>>>>>>>>> " + ans);
    // this.ws.send("/app/privateMessage", {}, ans);
    this.ws.send("/app/privateMessage", {}, ans);
  }

  sendAnswerToAll(answer) {
    this.selectedAnswer = answer;
    this.sendAnswer(answer);

    const ans = JSON.stringify({
      userId: JSON.stringify(this.user2),

      questionStamp: this.questionStamp,
      questionId: this.questionId,
      selectedOption: answer,
      correctAns: this.correctAns,
      score: this.score,
      endTime: JSON.stringify(this.count)
    });
    // this.ws.send("/app/privateMessage", {}, ans);
    console.log("Data is :===========>" + ans);
    this.ws.send("/app/messageOpen", {}, ans);
  }

  showUserData(message) {
    this.showConversation = true;
    const rep = message
      .replace("[", "")
      .replace("]", "")
      .replace("{", "")
      .replace("}", "")
      .replace(/"/g, "");
    const quest = rep.split(",");

    for (let k = 0; k <= quest.length; k++) {
      this.matchingData[k] = quest[k];
    }
    this.user[0] = this.matchingData[0].split(":")[1];
    this.user[1] = this.matchingData[1].split(":")[1];
    this.score[0] = this.matchingData[2].split(":")[1];
    this.user[2] = this.matchingData[3].replace("{", "").split(":")[1];
    this.user[3] = this.matchingData[4].replace(/"/g, "").split(":")[1];

    this.score[1] = this.matchingData[5].replace(/"/g, "").split(":")[1];
    this.score[2] = this.score[1].replace("}", "");

    console.log("Parsing Data : " + quest);

    console.log("Private Data comming.....: " + message);

    if (this.i > 8) {
      this.disconnect();
      this.router.navigate(["/multiResult"]);
    }
    this.qNumber = this.i++;
  }

  showGreeting(message) {
    //this.qNumber = this.i++
    this.showConversation = true;
    // console.log('Type of Data =====> ' + typeof message);
    const rep = message
      .replace("{", "")
      .replace("}", "")
      .replace(/"/g, "");
    const quest = rep.split(",");

    for (let j = 0; j <= quest.length; j++) {
      this.data[j] = quest[j];
    }

    this.questionId = this.data[0].split(":")[1];
    console.log(this.questionId);
    this.questionStamp = this.data[1].split(":")[1];
    console.log(this.questionStamp);
    this.op1 = this.data[2].split(":")[1];
    this.op2 = this.data[3].split(":")[1];
    this.op3 = this.data[4].split(":")[1];
    this.op4 = this.data[5].split(":")[1];
    this.correctAns = this.data[6].split(":")[1];

    console.log("Correct Ans" + this.correctAns);
    // tslint:disable-next-line:radix
    this.totalTime = parseInt(this.data[7].split(":")[1]);
    // this.user[0] = parseInt(this.data[10].split(':')[1]);
    console.log(this.totalTime);
    // this.multiPlayerService.seconds = this.totalTime;
    this.complete();
    this.startTimer();
  }

  startTimer() {
    this.count = 15;
    this.timer = setInterval(() => {
      this.count--;
      if (this.count <= 1) {
        this.sendAnswerToAll("");
      }
    }, 1000);
  }

  complete() {
    clearInterval(this.timer);
  }

  timeElapsed() {
    return Math.floor(this.count % 60);
  }

  setConnected(connected) {
    this.disabled = connected;
    this.showConversation = connected;
    this.data = [];
  }

  ngOnInit() {
    this.matchingUsersService.getMatchingUsers().subscribe(data => {
      this.matchingUsers = data;
      this.user1 = this.matchingUsers[0].userId;
      this.user2 = this.matchingUsers[1].userId;
    });
    this.connect();
  }
}