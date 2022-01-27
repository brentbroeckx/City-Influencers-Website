import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import {CityDashboardRoutingModule} from './city-dashboard-routing.module';
import { DashboardModule } from './dashboard/dashboard-header/dashboard.module';
import { MyInfluencersModule } from './dashboard/my-influencers/my-influencers.module';
import { MyTasksModule } from './dashboard/my-tasks/my-tasks.module';
import { OverviewModule } from './dashboard/overview/overview.module';
import { SettingsModule } from './dashboard/settings/settings.module';

@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    CityDashboardRoutingModule,
    
  ],
  exports: [
    OverviewModule,
    MyInfluencersModule,
    MyTasksModule,
    DashboardModule,
    SettingsModule
    
  ]
})
export class CityDashboardModule {
}