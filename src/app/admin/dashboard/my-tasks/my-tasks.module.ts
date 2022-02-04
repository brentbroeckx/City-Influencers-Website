import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { DashboardModule } from "../dashboard-header/dashboard.module";
import { SideNavigationComponent } from "../navigation/side-navigation.component";
import { SidenavigationModule } from "../navigation/side-navigation.module";
import { MyTasksRoutingModule } from "./my-tasks-routing.module";
import { MyTasksDetailComponent } from "./my-tasks-tab/my-tasks-detail/my-tasks-detail.component";
import { MyTasksComponent } from "./my-tasks-tab/my-tasks.component";
import { MyPostsCardComponent } from './my-tasks-card/my-posts-card.component';

@NgModule({
    declarations: [
        MyTasksComponent,
        MyTasksDetailComponent,
        MyPostsCardComponent
        
    ],
    imports: [
        SharedModule,
        MyTasksRoutingModule,
        DashboardModule,
        SidenavigationModule
    ],
    exports: [
        MyTasksComponent

    ],
    providers: []
})

export class MyTasksModule {

}