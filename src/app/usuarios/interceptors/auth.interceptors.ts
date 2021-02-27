import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authcService:AuthService, private router:Router ){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(e => {
              if(e.status == 401 ){
                  if(this.authcService.isAuthenticated){
                    this.authcService.logOut();
                  }
                  this.router.navigate(['/home']);
              }
              if(e.status == 403 ){
                 this.router.navigate(['/']);
              }
              return throwError(e);
        })
    )

  }




}
