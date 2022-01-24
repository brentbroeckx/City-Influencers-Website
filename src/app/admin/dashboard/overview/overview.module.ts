import { NgModule } from "@angular/core";
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardModule } from "../dashboard-header/dashboard.module";
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
    ],
    exports: [
        OverviewComponent,
    ],
    providers: []
})

export class OverviewModule {

}