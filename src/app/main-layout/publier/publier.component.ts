import { Component, OnInit } from '@angular/core';
import {Publication} from "../../publication/publication.component";
import {EntityDemandeSang} from "../entity-demande-sang/entity-demande-sang.component";
import {EntityEvent} from "../entity-event/entity-event.component";
import {ServicePubService} from "../../service-pub.service";
import {SangServiceService} from "../../sang-service.service";
import {EventServiceService} from "../../event-service.service";
import {HttpnotificationService} from '../../httpNotification.service'

@Component({
  selector: 'rb-publier',
  templateUrl: './publier.component.html',
  styleUrls: ['./publier.component.css']
})
export class PublierComponent implements OnInit {

  constructor(public notif : HttpnotificationService , public  ser1 : ServicePubService, public  ser2 :SangServiceService, public  ser3 : EventServiceService) { }

  pushpub :Publication;
  pushevent:EntityEvent;
  notification   = { 
  app_id: "2d0bcb26-d18f-45ad-bc57-368378655536",
  contents: {"en": "English Message"},
  included_segments: ["All"]
};
 
  date  = Date();
  pushsang:EntityDemandeSang =new EntityDemandeSang("O+","Rh+","bouira",2,this.date);

  ngOnInit() {
  };



  submit1(){
    this.ser2.send(this.pushsang);
    this.ser2.initialise();
  };




  submit2(){
    this.ser1.send(this.pushpub);
    this.ser2.initialise();
  };
  submit3(){
    this.ser3.send(this.pushevent);
    this.ser2.initialise();
  };
  notifyDonners(){
    this.notif.sendData(this.notification) ;  
    console.log(this.notif.sendData(this.notification) ) ;   
  }
}
