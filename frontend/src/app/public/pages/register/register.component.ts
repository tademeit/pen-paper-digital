import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRegistrationDto} from "../../../../../../src/public/register/user-registration.dto";
import {UserDto} from "../../../../../../src/public/register/user.dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error: Error;

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService) { }

  onSubmit(): void {
    const userRegistration = new UserRegistrationDto(
      this.registerForm.get('username').value,
      this.registerForm.get('email').value,
      this.registerForm.get('password').value,
    );

    this.userService.register(userRegistration)
      .subscribe(
        (user: UserDto) => console.log(user.user_id),
        (error) => {
          this.error = error
        }
      );
  }

}
