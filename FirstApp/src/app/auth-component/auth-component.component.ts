import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponsePayLoad } from '../services/auth.services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errorMessage: any;
  constructor(private _authService: AuthService, private _router : Router) { }

  ngOnInit() {
    console.log('Auth Component');
  }
  onSwitch() {
    this.isLoginMode = !this.isLoginMode;

  }
  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }
    
    const Email = form.value.email;
    const Password = form.value.password;
    
    let obs: Observable<AuthResponsePayLoad>;
    if (this.isLoginMode) {
     obs = this._authService.onSiginIn(Email , Password);
     
    } else {
     obs =this._authService.onSiginUp(Email , Password);
    }
    obs.subscribe(response => {
      this._router.navigate(['reciepe']);
      //console.log("Reciepe Route: ",this._router.navigate(['reciepe']));
      console.log(response);
    }, (error) => {
      this.errorMessage = error;
      console.log(error);
    });
  
    form.resetForm();

  }
}
