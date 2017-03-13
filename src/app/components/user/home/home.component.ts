import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { EventEmitter, Output} from '@angular/core';
import {CategoriesService} from "../../../categories.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  name: any;
  state: string = '';
   @Output() sampleData :number = 1;
  @Output()  change2 = new EventEmitter();
  constructor(public af: AngularFire,private router: Router,private  ser : CategoriesService) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login-fort');
  }
  title = 'rb works!';
 

  onNotify(e){
    this.change2.emit();
    this.sampleData =this.ser.categorie;
  }

  ngOnInit() {
  }
}

 