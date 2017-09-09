import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {
  constructor(private http: Http){}
  storeServers(servers: any[]) {
    const headers =  new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://ng-udemy-app.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://ng-udemy-app.firebaseio.com/data.json', servers, {headers: headers});
  }
  getServers() {
    return this.http.get('https://ng-udemy-app.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('something went wrong');
        }
      );
  }
  getAppName(){
    return this.http.get('https://ng-udemy-app.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
}