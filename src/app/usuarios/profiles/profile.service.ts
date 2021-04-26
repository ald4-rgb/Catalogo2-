import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Region } from 'src/app/registro/region';
import { User } from 'src/app/registro/user';
import { Role } from '../role';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private urlEndPoint:string = 'http://localhost:8080/catalogo/usuarios';


  private _notiUpload = new EventEmitter<any>();  

  constructor(private http:HttpClient,private router:Router) { }
  
  get notiUpload():EventEmitter<any>{
    return this._notiUpload;
  }


getRegiones():Observable<Region[]>{
    return this.http.get<Region[]>(this.urlEndPoint + '/regiones');
  }

  getUsers():Observable<User[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response => response as User[]));
  }
  
  getRoles():Observable<Role[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Role[] ))  
  }

  getUser(id: any):Observable<User>{
    return this.http.get<User>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
          if(e.status !=401 && e.error.mensaje ){
            this.router.navigate(['/perfil']);
            
          }
          return throwError(e);
      })
    ) 
  }
  public update(user:User):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${user.id}`,user).pipe(
      catchError(e =>{
          if(e.status==400){
            return throwError(e);
          }
          if(e.errors.mensaje){
            
          }
            return throwError(e); 
      })
    );
  }
  uploadPicture(file: File, id):Observable<HttpEvent<{}>>{
    let formData = new FormData();
    
    formData.append("file", file);
    formData.append("id",  id);
    
    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload`, formData, {
      reportProgress:true
    })
    
    return this.http.request(req);

  }

}
