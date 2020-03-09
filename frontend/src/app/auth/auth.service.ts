import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, from, Observable, of, throwError} from "rxjs";
import createAuth0Client from "@auth0/auth0-spa-js";
import {environment} from "../../environments/environment";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";
import {catchError, concatMap, shareReplay, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = null;

  auth0Client$ = (from(
    createAuth0Client({
      domain: environment.auth0_domain,
      client_id: environment.auth0_client_id,
      redirect_uri: `${window.location.origin}`
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1),
    catchError(err => throwError(err))
  );

  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap(res => this.loggedIn = res)
  );

  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );

  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();

  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap(user => this.userProfileSubject$.next(user))
    );
  }

  login(redirectPath = '/') {
    this.auth0Client$.subscribe((client: Auth0Client) => {
      return client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath}
      });
    });
  }

  logout() {
    this.auth0Client$.subscribe((client: Auth0Client) => {
      client.logout({
        client_id: environment.auth0_client_id,
        returnTo: `${window.location.origin}`
      })
    })
  }

  private localAuthSetup() {
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          return this.getUser$();
        }

        return of(loggedIn);
      })
    );

    checkAuth$.subscribe();
  }

  private handleAuthCallback() {
    const params = window.location.search;

    if(params.includes('code=') && params.includes('state=')) {
      let targetRoute: string;

      const authComplete$ = this.handleRedirectCallback$.pipe(
        tap(cbRes => {
          targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }),
        concatMap(() => {
          return combineLatest([
            this.getUser$(),
            this.isAuthenticated$
          ]);
        })
      );

      authComplete$.subscribe(([user, loggedIn]) => {
        return this.router.navigate([targetRoute]);
      })
    }
  }

  constructor(private router: Router) {
    this.localAuthSetup();
    this.handleAuthCallback();
  }
}
