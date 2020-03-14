import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserRegistrationDto} from "../../../../../../src/public/register/user-registration.dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService) { }

  onSubmit(): void {
    const userRegistration = new UserRegistrationDto();
    userRegistration.connection = 'Username-Password-Authentication';
    userRegistration.username = this.registerForm.get('username').value;
    userRegistration.email = this.registerForm.get('email').value;
    userRegistration.password = this.registerForm.get('password').value;

    this.userService.register(userRegistration);
  }

}
