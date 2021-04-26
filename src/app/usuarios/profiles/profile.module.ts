import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { AdminRouteModule } from './profile-route.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile.component';
import { EditComponent } from './edit/edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { ProfileService } from './profile.service';


@NgModule({
  declarations: [ShowComponent,ProfileComponent,EditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRouteModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule

  ],providers: [ProfileService,
    {provide: LOCALE_ID, useValue: 'es-MX' },
    {provide: HTTP_INTERCEPTORS,  useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AdminModule { }
