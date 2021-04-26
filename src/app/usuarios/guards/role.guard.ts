import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service'
import swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService, private route:Router)  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!this.authService.isAuthenticated()){
        this.route.navigate(['/login']);

        return false;
      }
    let roles = next.data['role'] as string [] ;
    
    console.log(roles);

  
    let hasROLE = false
   
    roles.forEach(role => {
      if(this.authService.hasRole(role)){
        hasROLE = true;
      }
    }); 
       if(hasROLE){
         return true;
       }   
       console.log(hasROLE );
 

    swal.fire('Accesos denegado', `Lociento ${this.authService.user.username} usted no tiene accesos a este recurso`,'warning'   )
    this.route.navigate(['/home']);
    return false;

    
  }
  
}
