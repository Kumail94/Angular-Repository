import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.services';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService : AuthService , private router : Router){}
    canActivate(route : ActivatedRouteSnapshot, router : RouterStateSnapshot):boolean | UrlTree | Promise<boolean|UrlTree>|Observable<boolean|UrlTree>{
        return this.authService.userAuthentication.pipe(
            map(user=>{
            const isAuth = !!user;
            if(isAuth){
                return true;
            }
            return this.router.createUrlTree(['/auth']); 
        // }),tap(auth => {
        //     if(!auth){
        //     this.router.navigate(['auth']);
        //     }
        // }
        
            })
        )
    }
}