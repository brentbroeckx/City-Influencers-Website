import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminOverviewRoutingModule } from "./admin-overview-routing.module";
import { AdminOverviewComponent } from "./admin-overview-tab/admin-overview.component";



@NgModule({
    declarations: [
        AdminOverviewComponent,
    ],
    imports: [
        SharedModule,
        AdminOverviewRoutingModule,
    ],
    exports: [
        AdminOverviewComponent,
        
    ],
    providers: []
})

export class AdminOverviewModule {

}