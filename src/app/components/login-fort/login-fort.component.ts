import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-fort',
  templateUrl: './login-fort.component.html',
  styleUrls: ['./login-fort.component.css']
})
export class LoginFortComponent implements OnInit {

 state: string = '';
    error: any;

    constructor(public af: AngularFire,private router: Router) {
      this.af.auth.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('/home');
        }
      });
  }


  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
   loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  ngOnInit() {
  }

}
