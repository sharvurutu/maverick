import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {

  readonly rootUrl = 'http://maverick.stackroute.in:9092';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number;

  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds % 60);
  }

  getQuestions() {
    return this.http.get(this.rootUrl + '/api/v1/getdata');
  }

  getAnswers() {
    var body = this.qns.map(x => x.qId);
    return this.http.post(this.rootUrl + '/api/v1/answers', body);
  }

  result(data: any[], score: number) {
    return this.http.post(this.rootUrl + '/api/v1/result' + '/' + score, data);
  }

  grafna() {
    return this.http.get("http://maverick.stackroute.in:3000");
  }
}