import { NgModule } from "@angular/core";
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { DashboardModule } from "../dashboard-header/dashboard.module";
import { SideNavigationComponent } from "../navigation/side-navigation.component";
import { SidenavigationModule } from "../navigation/side-navigation.module";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings-tab/settings.component";

@NgModule({
    declarations: [
        SettingsComponent,
    ],
    imports: [
        SharedModule,
        SettingsRoutingModule,
        DashboardModule,
        SidenavigationModule,

    ],
    exports: [
        SettingsComponent,
    ],
    providers: []
})

export class SettingsModule {

}