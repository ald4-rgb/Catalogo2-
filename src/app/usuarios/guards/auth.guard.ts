import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, private route:Router)  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated()){
        if(this.isTokenExpired()){
          this.authService.logOut();
        this.route.navigate['/login'];
          return true;
          }
            
      return true;
    }
    this.route.navigate['/login'];
    return true;

  }
  isTokenExpired():boolean{
    let token = this.authService.token;
    let payload = this.authService.getDataToken(token);
    let now = new Date().getTime()/1000;
    if(payload.exp <= now ){
    return true;
    }
    return false;
  } 

}
