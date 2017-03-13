import {Component, OnInit, Input} from '@angular/core';
import {EntityEvent} from "../entity-event/entity-event.component";

@Component({
  selector: 'rb-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() pub :EntityEvent ;
}
