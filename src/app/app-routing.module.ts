import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPlantComponent } from './user-plant/user-plant.component';

const routes: Routes = [
  {path:'', redirectTo:'/user-plant', pathMatch:'full'},
  {path:'user-plant', component:UserPlantComponent},
  {path:'user', loadChildren:()=> import('./user/user-routing.module').then(m=>m.UserRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
