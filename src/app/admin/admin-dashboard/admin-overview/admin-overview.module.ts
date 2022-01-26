import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminDashboardModule } from "../dashboard-header/dashboard.module";
import { AdminSidenavigationModule } from "../navigation/side-navigation.module";
import { AdminOverviewRoutingModule } from "./admin-overview-routing.module";
import { AdminOverviewComponent } from "./admin-overview-tab/admin-overview.component";



@NgModule({
    declarations: [
        AdminOverviewComponent,
    ],
    imports: [
        SharedModule,
        AdminOverviewRoutingModule,
        AdminDashboardModule,
        AdminSidenavigationModule
    ],
    exports: [
        AdminOverviewComponent,
        
    ],
    providers: []
})

export class AdminOverviewModule {

}