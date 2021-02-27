import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private urlEndPoint: string = 'http://localhost:8080/catalogo/registro';

  constructor(private readonly http: HttpClient, private router: Router) { }

  save(user: User): Observable<any> {
    return this.http.post(this.urlEndPoint, user)
      .pipe(
        map((response: any) => response.user as User),
        catchError(e => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }
}
