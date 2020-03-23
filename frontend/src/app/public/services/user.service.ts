import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegistrationDto} from "../../../../../src/public/register/user-registration.dto";
import {catchError} from "rxjs/operators";
import {UserDto} from "../../../../../src/public/register/user.dto";
import {Observable, throwError} from "rxjs";
import {HttpException} from "@nestjs/common";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(userRegistration: UserRegistrationDto): Observable<UserDto> {
    const url = 'http://localhost:3000/api/register';
    return this.http.post<UserDto>(url, userRegistration)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error) {
    return throwError(error.message);
  }
}
