import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { SideNavigationComponent } from "../navigation/side-navigation.component";
import { MyTasksRoutingModule } from "./my-tasks-routing.module";
import { MyTasksComponent } from "./my-tasks-tab/my-tasks.component";

@NgModule({
    declarations: [
        MyTasksComponent,
    ],
    imports: [
        SharedModule,
        MyTasksRoutingModule
    ],
    exports: [
        MyTasksComponent,

    ],
    providers: []
})

export class MyTasksModule {

}