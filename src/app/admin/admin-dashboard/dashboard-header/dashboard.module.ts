import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";


@NgModule({
    declarations: [
        DashboardHeaderComponent
    ],
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        DashboardHeaderComponent

    ],
    providers: []
})

export class AdminDashboardModule {

}