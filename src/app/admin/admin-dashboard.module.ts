import {NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminOverviewModule } from './admin-dashboard/admin-overview/admin-overview.module';
import { RequestsModule } from './admin-dashboard/requests/requests.module';

@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    AdminDashboardRoutingModule,
    
  ],
  exports: [
      RequestsModule,
      AdminOverviewModule
  ]
})
export class AdminModule {
}