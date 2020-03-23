import {HttpClient} from "@angular/common/http";
import {UserRegistration} from '@ppd/api-interfaces';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserLogin} from "../../../../../libs/api-interfaces/src/lib/user-login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin) {
    const url = 'http://localhost:3000/api/login';
    return this.http.post(url, userLogin);
  }

  register(userRegistration: UserRegistration) {
    const url = 'http://localhost:3000/api/register';
    return this.http.post(url, userRegistration);
  }
}
