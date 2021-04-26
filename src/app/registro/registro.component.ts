import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from './region';
import { RegistroService } from './registro.service';
import { User } from './user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService],

})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
  regionForm:FormGroup;
  constructor(private fb: FormBuilder, public registerService: RegistroService,
  private router: Router, public activatedRoute: ActivatedRoute) { }

  public titulo:string = 'Unirme como mienbro al catalogo de productos';

  public user: User = new User();

  //public region: Region = new Region();

  public errores: string[];

  private isEmail = /\S+@\S+\.\S+/;

  public regiones: Region[];
  

    ngOnInit(): void {
    this.initForm();
    this.getUser();
    this.getRegion();
  }

  getUser():void{
   this.activatedRoute.paramMap.subscribe(params =>
     {
      let id = params.get['id'];


      if(id && this.user){
        this.registerService.getUser(id).subscribe((user) => this.user = user)
      }
    });

  //  this.registerService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }

  getRegion(){

    this.registerService.getRegiones().subscribe(regiones => this.regiones = regiones);

  }
  



  onSave(): void {
   if (this.registerForm.valid) {

      this.user = this.registerForm.value;

      this.registerService.save(this.user).subscribe(user => {
        this.router.navigate(['/home']);
        console.log(this.registerForm.value);
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde back end:' + err.status);
          console.error(err.error.errors);
        }
      )
    }
 /* else {
      console.log('No valid');

    }*/

  }
  isValidField(field: string): string {
    const validatedField = this.registerForm.get(field);
    return (!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  noRequiredHasValue(field:string):string{
     return this.registerForm.get(field).value ? 'is-valid' :  '';
  }

  private initForm(): void {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      lastNameSec:['', [Validators.required]],
      dateBorn:[''],
      region: ['',[Validators.required],this.getRegion()],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    });
  }
  compararRegion(o1:Region , o2:Region ):boolean{

    if(o1 === undefined &&  o2 === undefined){
        return true;
    }
    return o1 === null  || o2 === null || o1 === undefined  || o2 === undefined  ? false : o1.id===o2.id;
   // return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }


 }

