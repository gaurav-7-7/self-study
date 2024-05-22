import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, empty, Observable, Subject, switchMap, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  refreshingAccessToken!: boolean;

  accessTokenRefresed: Subject<any> = new Subject();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    req = this.addAuthHeader(req)
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        if(err.status === 401) {
          return this.refreshAccessToken()
            .pipe(
              switchMap(() => {
                req = this.addAuthHeader(req);
                return next.handle(req);
              }),
              catchError((err: any) => {
                console.log(err);
                this.authService.logout();
                return empty();
              })
            )
        }
        return throwError(err);
      })
    )
  }

  refreshAccessToken() {
    if(this.refreshingAccessToken){
      return new Observable(observer => {
        this.accessTokenRefresed.subscribe(() => {
          observer.next();
          observer.complete();
        })
      })
    } else {
      this.refreshingAccessToken = true;
      // we want to call a method in the auth service to send a request to refresh the access token
      return this.authService.getNewAccessToken().pipe(
        tap(() => {
          console.log("Access Token Refreshed!");
          this.refreshingAccessToken = false;
          this.accessTokenRefresed.next(void 0);
        })
      )
    }
  }

  addAuthHeader(req: HttpRequest<any>) {
    const token = this.authService.getAccessToken();

    if(token) {
      return req.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return req;
  }
}
