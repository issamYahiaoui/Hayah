import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpnotificationService {

  constructor(private  http :Http) { }



  sendData(notification) {
      console.log('ahi tdkhol  hna ') ; 
    const body = JSON.stringify(notification);
    const headers = new Headers();
   
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization" ,  "Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj");
     const options = {
        host :"onesignal.com" ,
        port : 443 ,
        path : "api/v1/notifications" ,
        method :"post" ,
        headers : headers 
    }
    return this.http.post('https://onesignal.com/api/v1/notifications', body, options)
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }



  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }





}
