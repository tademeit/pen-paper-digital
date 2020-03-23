import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConnectionTypes, UserRegistration} from "@ppd/api-interfaces";
import {UserLogin} from "../../../../../../libs/api-interfaces/src/lib/user-login.model";
import {AuthService} from "../auth.service";

@Component({
  selector: 'ppd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  navigateToRegistration() {
    return this.router.navigate(['/register']);
  }

  onSubmit(): void {
    const userLogin: UserLogin = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    this.authService.login(userLogin).subscribe(
        (response) => {
          console.log('lol' + response)
        },
        (error) => {
          console.log(error);
        }
    );
  }

}
