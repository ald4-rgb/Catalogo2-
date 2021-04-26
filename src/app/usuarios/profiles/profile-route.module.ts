import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';

const routes:Routes =[{path:'',component:ShowComponent}] 


@NgModule({
  declarations: [],
  imports:[RouterModule.forChild(routes)],  
  exports:[RouterModule] 
})
export class AdminRouteModule { }
