import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/registro/region';
import { RegistroService } from 'src/app/registro/registro.service';
import { User } from 'src/app/registro/user';
import {HttpEventType} from '@angular/common/http'
import { AuthService } from '../auth.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
//@Input()user:User; 

public region: Region = new Region();

public user:User = new User();  
public errores: string[];
public selectPricture:File;
//public image:File;
public currentImage:string ='http://localhost:8080/images/no-user.png';

public progress:number = 0;

regiones:Region[];



  constructor(private profileService:ProfileService, public authService:AuthService,
    public activatedRoute:ActivatedRoute,public router:Router,private registerService:RegistroService) { }

  ngOnInit(): void {
    this.getAdmin();
    this.getState();
  }
getAdmin():void{
    this.activatedRoute.params.subscribe(params =>{
      
      let id =  this.authService.user.id;
      
      if(id){
        this.profileService.getUser(id).subscribe((user)=> this.user = user)
      }
    })
  
  }
getState():void{
  this.registerService.getRegiones().subscribe(regiones => this.regiones = regiones);    

}
/** Intento de soluciones , para seleccionar y ejecutar 
 * la imagen de perfil al mismo tiempo 
 * 
 * 1. meter el metodo upload() dentro de el metodo select() upload()->select() 
 * 
*/




  select(event){
    this.selectPricture = event.target.files[0];
    this.progress = 0;
    console.log(this.selectPricture);
    
    this.uploadPicture();

  if(this.selectPricture.type.indexOf('image') < 0 ){
      console.log("El archivo debe ser de tipo imagen ");

      this.selectPricture = null
    }
  }

  uploadPicture(){

    if(!this.selectPricture){
      console.log("error al subir la imagen");
    }else {

      this.profileService.uploadPicture(this.selectPricture, this.user.id)
          .subscribe(event =>{
            if(event.type === HttpEventType.UploadProgress){
              this.progress = Math.round((event.loaded/event.total)*100);
            }else if(event.type === HttpEventType.Response ) {
                let response: any  = event.body;
                this.user = response.user as User;
                this.profileService.notiUpload.emit(this.user);
                console.log("Foto subida correctamente");                
            }
        });
    }
  }
 

}
