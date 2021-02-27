import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';
import { User } from '../registro/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user:User;
  private _token:string;
  constructor(private  http:HttpClient) { }

  public get user():User{
    if(this._user != null ){
        return this._user;
    }else if(this._user == null && sessionStorage.getItem('user') != null){
      this._user = JSON.parse(sessionStorage.getItem('user')) as User;
      return this._user;
    }
    return new User();
  }

  public get token():string{
    if(this._token != null ){
      return this._token;
  }else if(this._token == null && sessionStorage.getItem('token') != null){
    this._token = sessionStorage.getItem('token') ;
    return this._token;
  }
    return null;
  }

  login(user :User):Observable<any>{
    const urlEndPoint = "http:localhost:8080/oauth/token";
    const accreditacion = btoa('angularapp'  +  ":"  +  '12345');
    const httpHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded',
      'Authorization':'Basic'  +  accreditacion});
    let params = new  URLSearchParams();
    params.set('grant-type','password');
    params.set('username', user.username);
    params.set('password',user.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndPoint,params.toString(), {headers : httpHeader});
  }

  saveUser(accessToken:string):void{
    let payload = this.getDataToken(accessToken);
    this._user = new User();
    this._user.name = payload.name
    this._user.lastName = payload.lastName
    this._user.email = payload.email
    this._user.username = payload.user_name
    this._user.password = payload.password
    this._user.roles =  payload.authorities;
    sessionStorage.setItem('user',JSON.stringify(this._user));
  }

  saveToken(accessToken:string):void{
    this._token = accessToken;
    sessionStorage.setItem('token',accessToken)
  }

  getDataToken(accessToken:string):any{
    if(accessToken != null){
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
      return null;
  }

  isAuthenticated():boolean{
    let payload = this.getDataToken(this.token)
    if(payload != null && payload.user_name && payload.user_name.length > 0  ){
        return true;
    }
        return false;
  }
  hasRole(roles:string):boolean{
    if(this.user.roles.includes(roles)){
      return true;
    }
      return false;
  }
  logOut():void{
     this._token = null;
     this._user = null;
     sessionStorage.clear();
     sessionStorage.removeItem('token');
     sessionStorage.removeItem('user');
  }
}
