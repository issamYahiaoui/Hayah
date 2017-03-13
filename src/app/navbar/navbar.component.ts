import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {CategoriesService} from "../categories.service";
import { AngularFireAuth } from "angularfire2/angularfire2";
import {AngularFire} from "angularfire2" ; 
import { Router } from '@angular/router';


@Component({
  selector: 'rb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  name : any   
  constructor(public af: AngularFire,private router: Router,private ser : CategoriesService) { 
     this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        console.log('hna'+name)
      }
    });
  }
  @Output()  change = new EventEmitter();
 
  onclicked(n : number){
    this.ser.setCategorie(n);
    this.change.emit();
    console.log(n);
  }
signout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/landing-page');
  }

}
