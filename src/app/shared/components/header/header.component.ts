import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/usuarios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {  }

  logOut():void{
    let username = this.authService.user.username;
    this.authService.logOut();
    this.router.navigate(['/home']);

  }


}
