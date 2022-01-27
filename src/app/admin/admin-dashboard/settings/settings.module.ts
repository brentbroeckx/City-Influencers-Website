import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminDashboardModule } from "../dashboard-header/dashboard.module";
import { AdminSidenavigationModule } from "../navigation/side-navigation.module";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings-tab/settings.component";


@NgModule({
    declarations: [
        SettingsComponent,
    ],
    imports: [
        SharedModule,
        SettingsRoutingModule,
        AdminDashboardModule,
        AdminSidenavigationModule
    ],
    exports: [
        SettingsComponent,
        
    ],
    providers: []
})

export class SettingsModule {

}