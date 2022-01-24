import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";


@NgModule({
    declarations: [
        DashboardHeaderComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        DashboardHeaderComponent

    ],
    providers: []
})

export class DashboardModule {

}