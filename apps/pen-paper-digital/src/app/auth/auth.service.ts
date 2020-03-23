import {HttpClient} from "@angular/common/http";
import {UserRegistration} from '@ppd/api-interfaces';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(userRegistration: UserRegistration) {
    const url = 'http://localhost:3000/api/register';

    return this.http.post(url, userRegistration).subscribe(
      resp => resp,
      error => error
    );
  }
}
