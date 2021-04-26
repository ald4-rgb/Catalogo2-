import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login-route.module';
import { TokenInterceptor } from './interceptors/token.interceptor';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginRouteModule,


  ]
  
  ,providers: [ {provide: LOCALE_ID, useValue: 'es-MX' },
                {provide: HTTP_INTERCEPTORS,  useClass: TokenInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]

})

export class LoginModule { }
