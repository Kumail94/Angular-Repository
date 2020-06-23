import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from '../model/User';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

export interface AuthResponsePayLoad {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered: boolean
}
@Injectable()
export class AuthService {
    userAuthentication = new BehaviorSubject<User>(null);
    constructor(private _http: HttpClient, private router: Router) {    }
    private Expirationtimer : any;
    onSiginIn(Email: string, Password: string) {
        return this._http.post<AuthResponsePayLoad>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseAPIKey, {
            email: Email,
            password: Password,
            returnSecureToken: true
        }).pipe(catchError(this.HandleError),
            tap(response => {
                this.HandleAuthentication(response.email, response.localId, response.idToken, response.expiresIn);
            })
        )
    }
    onSiginUp(Email: string, Password: string) {
        return this._http.post<AuthResponsePayLoad>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseAPIKey, {
            email: Email,
            password: Password,
            returnSecureToken: true
        }).pipe(catchError(this.HandleError), 
            tap(response => {
                this.HandleAuthentication(response.email, response.localId, response.idToken, response.expiresIn);
            })
        );
    }
    LogOut() {
        this.userAuthentication.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.Expirationtimer){
            clearTimeout(this.Expirationtimer);
        }
        this.Expirationtimer = null;
    }
    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.userAuthentication.next(loadedUser);
            const ExpiresDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(ExpiresDuration);
            console.log("User Authenticated: ",this.userAuthentication.next(loadedUser));
        }
    }
    autoLogout(timer:number){
        this.Expirationtimer = setTimeout(()=>{
            this.LogOut();
        },timer);
    }
    private HandleAuthentication(email: string, localId: string, idToken: string, expiresIn: string) {
        const expirationDate = new Date(new Date().getTime() + +expiresIn*1000);
        const user = new User(email, localId, idToken, expirationDate);
        this.userAuthentication.next(user);
        this.autoLogout(+expiresIn*1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
    private HandleError(errorResponse: HttpErrorResponse) {
        let errorMessage = "An Error occured";
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "Email is already exists";
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "Password is invalid";
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = "Email is not found";
                break;
        }
        return throwError(errorMessage);
    }
}