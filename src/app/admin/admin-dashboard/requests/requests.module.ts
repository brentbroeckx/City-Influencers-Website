import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminDashboardModule } from "../dashboard-header/dashboard.module";
import { AdminSidenavigationModule } from "../navigation/side-navigation.module";
import { RequestRoutingModule } from "./requests-routing.module";
import { RequestsComponent } from "./requests-tab/requests.component";


@NgModule({
    declarations: [
        RequestsComponent,
    ],
    imports: [
        SharedModule,
        RequestRoutingModule,
        AdminDashboardModule,
        AdminSidenavigationModule
    ],
    exports: [
        RequestsComponent,
        
    ],
    providers: []
})

export class RequestsModule {

}