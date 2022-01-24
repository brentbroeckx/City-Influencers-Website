import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import { DashboardModule } from './dashboard/dashboard-header/dashboard.module';
import { MyInfluencersModule } from './dashboard/my-influencers/my-influencers.module';
import { MyTasksModule } from './dashboard/my-tasks/my-tasks.module';
import { OverviewModule } from './dashboard/overview/overview.module';

@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    
  ],
  exports: [
    OverviewModule,
    MyInfluencersModule,
    MyTasksModule,
    DashboardModule,
  ]
})
export class AdminModule {
}