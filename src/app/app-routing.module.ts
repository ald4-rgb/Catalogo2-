import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { RoleGuard } from './usuarios/guards/role.guard';
import { EditComponent } from './usuarios/profiles/edit/edit.component';
import { ProfileComponent } from './usuarios/profiles/profile.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)},
  {path:'registrarme',loadChildren:()=> import('./registro/registro.module').then(m => m.RegistroModule)},
  {path:'login',loadChildren:()=> import('./usuarios/login.module').then(m => m.LoginModule) },
  {path:'mostrar',loadChildren:()=>import('./usuarios/profiles/profile.module').then(m => m.AdminModule),canActivate:[AuthGuard,RoleGuard],data: { role: ['ROLE_ADMIN']}},
  {path:'perfil',component:ProfileComponent,canActivate:[AuthGuard,RoleGuard],data:{role:['ROLE_USER', 'ROLE_ADMIN']}},
  {path:'editar/:id',component:EditComponent,canActivate:[AuthGuard,RoleGuard],data:{role:['ROLE_USER', 'ROLE_ADMIN']}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
