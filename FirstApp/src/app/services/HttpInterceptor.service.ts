import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.services';
import { take, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.userAuthentication
        .pipe(
            take(1),
             exhaustMap(user => {
            if (!user) {
                return next.handle(req);
            }
            const requestModified = req.clone({
                params: new HttpParams().set('auth', user.token)
            });
                return next.handle(requestModified);
            }
        ))
    }
}