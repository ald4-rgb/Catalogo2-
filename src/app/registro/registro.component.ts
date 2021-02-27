import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private registerService: RegistroService,
  private router: Router, private activatedRoute: ActivatedRoute) { }



  public user: User = new User();



  private urlEndPoint: string = 'http://localhost:8080/catalogo/registro';


  public errores: string[];

  private isEmail = /\S+@\S+\.\S+/;


  ngOnInit(): void {
    this.initForm();
  }

  onSave(): void {

    if (this.registerForm.valid) {

      let formValue = (this.registerForm.value);
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
    } else {
      console.log('No valid');

    }

  }
  isValidField(field: string): string {
    const validatedField = this.registerForm.get(field);
    return (!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    });
  }
}

