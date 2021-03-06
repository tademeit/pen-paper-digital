import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ConnectionTypes, UserRegistration } from "@ppd/api-interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'ppd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    const userRegistration: UserRegistration = {
      username: this.registerForm.get('username').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      connection: ConnectionTypes.UsernamePassword
    };

    this.authService.register(userRegistration).subscribe(
      (response) => {
        return this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
