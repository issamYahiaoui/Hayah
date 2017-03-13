import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Publication} from "./publication/publication.component";
import {Observable} from "rxjs";

@Injectable()
export class HttpserviceService {

  constructor(private  http :Http) { }

  getData() {
    return this.http.get('https://hack-it-2e239.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(pub: any) {
    const body = JSON.stringify(pub);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://hack-it-2e239.firebaseio.com/publication.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://hack-it-2e239.firebaseio.com/publication.json')
      .map((response: Response) => response.json());
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }





}
