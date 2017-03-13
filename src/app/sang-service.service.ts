import { Injectable } from '@angular/core';
import {EntityDemandeSang} from "./main-layout/entity-demande-sang/entity-demande-sang.component";
import {HttpserviceSangService} from "./httpservice-sang.service";

@Injectable()
export class SangServiceService {
  constructor( private  http :HttpserviceSangService ) { };
  date  = Date();
  pub :EntityDemandeSang =new EntityDemandeSang("O+","Rh+","bouira",2,this.date);

  myPublications  :EntityDemandeSang [] = [];

  ngOnInit(): void {

  };

  initialise() {


    this.onGetData();
  };


  getSang(){

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
          const myArray :EntityDemandeSang[] = [];
          for (let key in data) {
            myArray.push(data[key]);

          }
          this.myPublications.length = 0;

          for (let key in myArray) {
            this.myPublications.push( new EntityDemandeSang( myArray[key].groupe, myArray[key].rh,
              myArray[key].adress,myArray[key].emergency,myArray[key].date));
          }


        }
      );

  };

}
