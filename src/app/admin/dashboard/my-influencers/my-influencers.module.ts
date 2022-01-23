import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { SideNavigationComponent } from "../navigation/side-navigation.component";
import { InfluencerCardComponent } from "./influencer-card/influencer-card.component";
import { MyInfluencersRoutingModule } from "./my-influencers-routing.module";
import { MyInfluencersComponent } from "./my-influencers-tab/my-influencers.component";

@NgModule({
    declarations: [
        MyInfluencersComponent,
        InfluencerCardComponent,
        DashboardHeaderComponent,
        SideNavigationComponent
    ],
    imports: [
        SharedModule,
        MyInfluencersRoutingModule
    ],
    exports: [
        MyInfluencersComponent,
        InfluencerCardComponent,
        DashboardHeaderComponent,
        SideNavigationComponent
    ],
    providers: []
})

export class MyInfluencersModule {

}