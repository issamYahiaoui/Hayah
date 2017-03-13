import {Component, OnInit, Input} from '@angular/core';
import {EntityDemandeSang} from "../entity-demande-sang/entity-demande-sang.component";

@Component({
  selector: 'rb-demande-sang',
  templateUrl: './demande-sang.component.html',
  styleUrls: ['./demande-sang.component.css']
})
export class DemandeSangComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() pub :EntityDemandeSang ;

}
