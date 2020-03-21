import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ConnectionTypes, UserRegistration } from '@ppd/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(userRegistration: UserRegistration) {
    const url = 'http://localhost:3000/api/register';

    userRegistration = {
      username: 'timonohe',
      email: 'timo.nohe@gmx.de',
      password: 'kingdomhearts91!',
      connection: ConnectionTypes.UsernamePassword
    };

    this.http.post(url, userRegistration).subscribe(resp => console.log(resp));
  }
}
