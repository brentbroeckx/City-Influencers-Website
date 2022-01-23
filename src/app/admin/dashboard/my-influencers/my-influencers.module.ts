import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { DashboardModule } from "../dashboard-header/dashboard.module";
import { SideNavigationComponent } from "../navigation/side-navigation.component";
import { SidenavigationModule } from "../navigation/side-navigation.module";
import { InfluencerCardComponent } from "./influencer-card/influencer-card.component";
import { MyInfluencersRoutingModule } from "./my-influencers-routing.module";
import { MyInfluencersComponent } from "./my-influencers-tab/my-influencers.component";

@NgModule({
    declarations: [
        MyInfluencersComponent,
        InfluencerCardComponent,
    ],
    imports: [
        SharedModule,
        MyInfluencersRoutingModule,
        DashboardModule,
        SidenavigationModule
    ],
    exports: [
        MyInfluencersComponent,
        InfluencerCardComponent,
    ],
    providers: []
})

export class MyInfluencersModule {

}