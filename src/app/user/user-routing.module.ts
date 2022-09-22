import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingRoutingModule } from './user-routing-routing.module';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PlantSetupConfigurationComponent } from './plant-setup-configuration/plant-setup-configuration.component';
import { HeaderComponent } from './common/header/header.component';
import { SideNavbarComponent } from './common/side-navbar/side-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    PlantSetupConfigurationComponent,
    HeaderComponent,
    SideNavbarComponent
  ],
  imports: [
   
    CommonModule,
    UserRoutingRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class UserRoutingModule { }
