import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../usuarios/interceptors/auth.interceptor'
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from'@angular/material/core';

import {  MatFormFieldModule } from '@angular/material/form-field';
import { TokenInterceptor } from '../usuarios/interceptors/token.interceptor';
import { RegistroService } from './registro.service';



@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],providers: [ RegistroService,
  {provide: LOCALE_ID, useValue: 'es-MX' },
  {provide: HTTP_INTERCEPTORS,  useClass: TokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})

export class RegistroModule { }
