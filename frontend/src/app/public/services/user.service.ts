import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegistrationDto} from "../../../../../src/public/register/user-registration.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(userRegistration: UserRegistrationDto) {
    const url = 'http://localhost:3000/api/register';
    userRegistration.username = 'timonohe';
    userRegistration.connection = 'Username-Password-Authentication';
    userRegistration.email = 'timo.nohe@gmx.de';
    userRegistration.password = 'Kingdomhearts91!';
    this.http.post(url, userRegistration).subscribe(resp => console.log(resp));
  }
}
