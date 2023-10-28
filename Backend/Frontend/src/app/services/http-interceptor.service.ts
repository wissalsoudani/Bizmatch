import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
 
    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.loginService.isUserSignedin() && this.loginService.getToken()) {
            const request = req.clone({
                headers: new HttpHeaders({
                    'Authorization': this.loginService.getToken()
                })
            });
            return next.handle(request).pipe(
                catchError(err => {
                    if (err instanceof HttpErrorResponse && err.status === 401) {
                        this.loginService.signout();
                    }
                    return throwError(err);
                })
            );
        }
        return next.handle(req);
    }
}
