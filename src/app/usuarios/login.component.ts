import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../registro/user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo:string = 'Iniciar seción'
  user:User;
  private errores:string [];
  constructor(private authService:AuthService, private  router:Router) {
      this.user = new User();
   }

  ngOnInit(): void {

    if(this.authService.isAuthenticated()){
      console.log('usuario autenticado')
      this.router.navigate(['/home']);
    }
  }

  login():void{
    console.log(this.user);
    if(this.user.username == null || this.user.password == null){
        return;
    }
    this.authService.login(this.user).subscribe(response => {
          console.log(response);
          let payload = JSON.parse(atob(response.access_token.split(".")[1]));
          console.log(payload);
          this.authService.saveUser(response.access_token);
          this.authService.saveToken(response.access_token);
          let user = this.authService.user;
          this.router.navigate(['/home']);

    },err=>{
      this.errores = err.error.errors as string[]
      if(err.status=400){
        console.log('error')
      }
    });

  }





}
