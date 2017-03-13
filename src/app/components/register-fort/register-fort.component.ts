import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-fort',
  templateUrl: './register-fort.component.html',
  styleUrls: ['./register-fort.component.css']
})
export class RegisterFortComponent implements OnInit {


 state: string = '';
  error: any;
  constructor(public af: AngularFire,private router: Router) { }

 onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.router.navigate(['/home'])
      }).catch(
        (err) => {
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }

}