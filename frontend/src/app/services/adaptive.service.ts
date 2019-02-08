import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdaptiveService {

  constructor(private http: HttpClient) { }
   
  getResult(): Observable<any> {
    
    console.log('http://maverick.stackroute.in:9094/api/v1/adaptiveGameEngine/adaptiveResult');
    return this.http.get('http://maverick.stackroute.in:9094/api/v1/adaptiveGameEngine/adaptiveResult');
  }
}
