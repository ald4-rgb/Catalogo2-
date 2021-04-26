import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/registro/region';
import { RegistroService } from 'src/app/registro/registro.service';
import { User } from 'src/app/registro/user';
import { AuthService } from '../../auth.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 //@Input() user:User; 
  errores:string [];
  regiones:Region[];
  //regiones: any;
 public user:User = new User();
 // registerService: any;

  constructor(public activatedRoute:ActivatedRoute,public router:Router,
              public profileService:ProfileService,private authservice:AuthService,
              public registerService:RegistroService) { }

  ngOnInit(): void {
    this.getAdmin();
  }
  
  getAdmin():void{
    this.activatedRoute.params.subscribe(params =>{
      
      let id =  this.authservice.user.id;
      
      if(id){
        this.profileService.getUser(id).subscribe((user)=> {this.user = user})
      }
    })
    this.profileService.getRegiones().subscribe(regiones => this.regiones = regiones); 
  }
  public update():void{
    this.profileService.update(this.user).subscribe(json =>{
        this.router.navigate(['/perfil']);
    },err =>{
          this.errores = err.error.errors as string[];
          console.error('Codigo de error desde el back-end'+ err.status);
          console.error(err.error.errors);
    })
  }  

  compararRegion(o1:Region , o2:Region ):boolean{
      if(o1 === undefined &&  o2 === undefined){
          return true;
      }
      return o1 === null  || o2 === null || o1 === undefined  || o2 === undefined  ? false : o1.id===o2.id;
    }
  
}
