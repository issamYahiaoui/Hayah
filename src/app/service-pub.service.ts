import {Injectable, OnInit, Attribute} from '@angular/core';
import {PublicationComponent} from "./main-layout/publication/publication.component";
import {Publication} from "./publication/publication.component";
import {Response} from "@angular/http";
import {HttpserviceService} from "./httpservice.publication";

@Injectable()
export class ServicePubService implements  OnInit{

   date= Date();

  constructor( private  http :HttpserviceService ) { };

  myPublications  :Publication [] = [];


  pub =new Publication("adel","nerf","wakil", this.date ,"121","bouira","adkja",236565,1);


  ngOnInit(): void {


  };

  initialise() {

   this.onGetData();
  };


  getPub(){

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
          const myArray :Publication[] = [];
          for (let key in data) {
            myArray.push(data[key]);

          }
          this.myPublications.length = 0;

          for (let key in myArray) {
            this.myPublications.push( new Publication( myArray[key].name, myArray[key].description,
              myArray[key].longdescription, myArray[key].date ,myArray[key].montant,myArray[key].adress,
              myArray[key].email,myArray[key].phone,myArray[key].priorite));
          }


        }
      );

  };



}
