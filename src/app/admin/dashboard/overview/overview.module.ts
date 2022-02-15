import { NgModule } from "@angular/core";
import { CountUpModule } from "ngx-countup";
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { DashboardModule } from "../dashboard-header/dashboard.module";
import { SideNavigationComponent } from "../navigation/side-navigation.component";
import { SidenavigationModule } from "../navigation/side-navigation.module";
import { OverviewRoutingModule } from "./overview-routing.module";
import { OverviewComponent } from "./overview-tab/overview.component";

@NgModule({
    declarations: [
        OverviewComponent,
        
    ],
    imports: [
        SharedModule,
        OverviewRoutingModule,
        DashboardModule,
        SidenavigationModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        CountUpModule
    ],
    exports: [
        OverviewComponent,
    ],
    providers: []
})

export class OverviewModule {

}