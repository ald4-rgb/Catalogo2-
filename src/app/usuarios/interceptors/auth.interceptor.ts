import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import swal from 'sweetalert2'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authService:AuthService, private router:Router ){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(e => {
              if(e.status == 401 ){
                    if(this.authService.isAuthenticated()){
                    this.authService.logOut();
                  }
                  this.router.navigate(['/home']);
              }
              if(e.status == 403 ){
                swal.fire('Accesos denegado', `Lociento ${this.authService.user.username} usted no tiene accesos a este recurso`,'warning'   )

                 this.router.navigate(['/home']);
              }
              return throwError(e);
        })
    )

  }




}
