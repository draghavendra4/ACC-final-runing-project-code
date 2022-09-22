import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPlantComponent } from './user-plant/user-plant.component';
import { PLCConfigurationComponent } from './user/plc-configuration/plc-configuration.component';
import { ConveyorsSegmentsConfigComponent } from './user/conveyors-segments-config/conveyors-segments-config.component';
import { StationConfigComponent } from './user/station-config/station-config.component';
import { SyncChangesComponent } from './user/sync-changes/sync-changes.component';
import { ReportComponent } from './user/report/report.component';
import { SecuritySetupComponent } from './user/security-setup/security-setup.component';
import { PlantMaintenanceComponent } from './user/plant-maintenance/plant-maintenance.component';

import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    UserPlantComponent,
    PLCConfigurationComponent,
    ConveyorsSegmentsConfigComponent,
    StationConfigComponent,
    SyncChangesComponent,
    ReportComponent,
    SecuritySetupComponent,
    PlantMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule, MatSliderModule, MatTableModule, NgxPaginationModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    Ng2SearchPipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
