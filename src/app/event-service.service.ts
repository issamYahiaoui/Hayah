import { Injectable } from '@angular/core';
import {EntityEvent} from "./main-layout/entity-event/entity-event.component";
import {HttpserviceEventService} from "./httpservice-event.service";

@Injectable()
export class EventServiceService {

  constructor( private  http :HttpserviceEventService ) { };
  date =Date();
  pub :EntityEvent =new EntityEvent("issam","hakit","hakit",this.date,"fdfd","fdfd",2242);

  myPublications  :EntityEvent [] = [];

  ngOnInit(): void {

  };

  initialise() {

    this.onGetData();
  };


  getEve(){

    return this.myPublications;

  };

  send(publication :any) {
    this.http.sendData(publication)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  };

  onGetData() {

    this.http.getOwnData()
      .subscribe(
        data => {
          const myArray :EntityEvent[] = [];
          for (let key in data) {
            myArray.push(data[key]);

          }
          this.myPublications.length = 0;

          for (let key in myArray) {
            this.myPublications.push( new EntityEvent(myArray[key].name, myArray[key].description,
              myArray[key].longdescription, myArray[key].date ,myArray[key].adress,
              myArray[key].email,myArray[key].phone));
          }


        }
      );

  };


}
