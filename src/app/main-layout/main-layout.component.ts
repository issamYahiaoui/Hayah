import {Component, OnInit, Output, OnChanges, SimpleChanges, Input} from '@angular/core';
import {ServicePubService} from "../service-pub.service";
import {Publication} from "../publication/publication.component";
import {EventServiceService} from "../event-service.service";
import {SangServiceService} from "../sang-service.service";
import {CategoriesService} from "../categories.service";
import {EntityEvent} from "./entity-event/entity-event.component";
import {EntityDemandeSang} from "./entity-demande-sang/entity-demande-sang.component";

@Component({
  selector: 'rb-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {




  ngOnInit(): void {
    this.servicecategorie.setCategorie(1);
    this.servicepub.initialise();
    this.serviceEve.initialise();
    this.serviceDem.initialise();
  }

  @Input() cat :number =1;

  constructor(private  servicepub :ServicePubService ,
              private  serviceEve :EventServiceService ,
              private serviceDem: SangServiceService,
              private  servicecategorie :CategoriesService ) {  };


  @ Output() mesPub:Publication[] =this.servicepub.getPub();
  @ Output() mesEve:EntityEvent[] =this.serviceEve.getEve();
  @ Output() mesDem:EntityDemandeSang[] =this.serviceDem.getSang();
}
