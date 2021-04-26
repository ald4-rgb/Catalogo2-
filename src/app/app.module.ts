import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';
import { AlertsComponent } from './alerts/alerts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localES from '@angular/common/locales/es-MX';
import { CommonModule, registerLocaleData } from '@angular/common';
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from'@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LoginComponent } from './usuarios/login.component';
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';
import {MatIconModule} from '@angular/material/icon';

registerLocaleData(localES,'es-MX')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule

  ],providers: [{provide: HTTP_INTERCEPTORS,  useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],


  //  providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],

  bootstrap: [AppComponent]
})
export class AppModule { }
