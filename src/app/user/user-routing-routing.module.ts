import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveyorsSegmentsConfigComponent } from './conveyors-segments-config/conveyors-segments-config.component';
import { PlantMaintenanceComponent } from './plant-maintenance/plant-maintenance.component';
import { PlantSetupConfigurationComponent } from './plant-setup-configuration/plant-setup-configuration.component';
import { PLCConfigurationComponent } from './plc-configuration/plc-configuration.component';
import { ReportComponent } from './report/report.component';
import { SecuritySetupComponent } from './security-setup/security-setup.component';
import { StationConfigComponent } from './station-config/station-config.component';
import { SyncChangesComponent } from './sync-changes/sync-changes.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user.component';

export const routes: Routes = [
  {
    path:'', component:UserComponent,

    children:[
      {path:'', component:UserHomeComponent},
      {path:'user-home', component:UserHomeComponent},
      {path:'plc-config', component:PLCConfigurationComponent},
      {path:'conveyors-segment-config', component:ConveyorsSegmentsConfigComponent},
      {path:'station-config', component:StationConfigComponent},
      {path:'sync-change', component:SyncChangesComponent},
      {path:'report', component:ReportComponent},
      {path:'plant-setup', component:PlantSetupConfigurationComponent},
      {path:'security-setup', component:SecuritySetupComponent},
      {path:'plant-maintenance', component:PlantMaintenanceComponent},

      
    ]
  },
  // { path: '', redirectTo: '/user-home', pathMatch: 'full' },
  // {path:'user-home', component:UserHomeComponent},
  // {path:'plant-setup', component:PlantSetupConfigurationComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingRoutingModule { }
