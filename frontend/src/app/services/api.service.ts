import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../models/user";
import {catchError, tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl)
      .pipe(
        tap((users) => console.log(`fetched ${users.length} users`)),
        catchError(this.handleError('getUsers', []))
      )
  }

  getUser(id: string): Observable<User> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  addArticle(article: User): Observable<User> {
    return this.http.post<User>(apiUrl, article, httpOptions).pipe(
      tap((user: User) => console.log(`added user w/ id=${user._id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  updateArticle(id: any, article: User): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, article, httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteArticle(id: any): Observable<User> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} throwed following error: ${error}`);
      return of(result as T);
    }
  }
}
