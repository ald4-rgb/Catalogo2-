import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/registro/region';
import { RegistroService } from 'src/app/registro/registro.service';
import { User } from 'src/app/registro/user';
import { AuthService } from '../auth.service';
import { Role } from '../role';
import { ProfileService } from './profile.service';
@Component({
  selector: 'app-admin',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
@Input() user:User;
  
  titulo:string = 'Mi perfil'; 
  
 // public user:User = new User();

  users:User[];

  roles:Role[];
  
  regiones:Region[];

  //Iinicializmos variable READMORE, es true que read mor
  ReadMore:boolean = true;
  
  //escnder la infromacion
  visible:boolean = false;

  constructor(private profileService:ProfileService,public activatedRoute:ActivatedRoute,
    public authService:AuthService, private registerService:RegistroService ) { }

  ngOnInit(): void {
  this.gitUsers();

  }

   onClick(){
     this.ReadMore = !this.ReadMore; //no es igual a la condicion
     this.visible = !this.visible; 
   } 
  

  gitUsers():void{
    this.profileService.getUsers().subscribe((users) => this.users = users);
    this.profileService.getRoles().subscribe((roles) => this.roles = roles);
    this.registerService.getRegiones().subscribe((regiones) => this.regiones = regiones);  
  
  }

  compararRegion(o1:Region , o2:Region ):boolean{

      if(o1 === undefined &&  o2 === undefined){
          return true;
      }
      return o1 === null  || o2 === null || o1 === undefined  || o2 === undefined  ? false : o1.id===o2.id;
     // return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
  }
