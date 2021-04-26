import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ProfileService } from 'src/app/usuarios/profiles/profile.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from 'src/app/usuarios/interceptors/auth.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],providers: [ ProfileService,
    {provide: LOCALE_ID, useValue: 'es-MX' },
    {provide: HTTP_INTERCEPTORS,  useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class HeaderModule { }

