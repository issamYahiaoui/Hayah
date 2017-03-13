import {Component, OnInit, Input} from '@angular/core';
import {Publication} from "../../publication/publication.component";
import {publicDecrypt} from "crypto";
import {ServicePubService} from "../../service-pub.service";

@Component({
  selector: 'rb-publication',
  templateUrl: './publication.component.html'
  , styleUrls: ['./publication.component.css']

})
export class PublicationComponent implements OnInit  {
  constructor( private  servicepub : ServicePubService){};
  ngOnInit(): void {
  }

  @Input() pub :Publication ;

}
