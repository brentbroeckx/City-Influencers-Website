import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { DashboardModule } from "../dashboard-header/dashboard.module";
import { SideNavigationComponent } from "../navigation/side-navigation.component";
import { SidenavigationModule } from "../navigation/side-navigation.module";
import { InfluencerCardComponent } from "./influencer-card/influencer-card.component";
import { MyInfluencersRoutingModule } from "./my-influencers-routing.module";
import { MyInfluencersComponent } from "./my-influencers-tab/my-influencers.component";
import { InfluencerDetailComponent } from './my-influencers-tab/influencer-detail/influencer-detail.component';
import { PostCardComponent } from './my-influencers-tab/influencer-detail/post-card/post-card.component';
import { PostDetailComponent } from './my-influencers-tab/post-detail/post-detail.component';
import { NgxSliderModule } from "@angular-slider/ngx-slider";

@NgModule({
    declarations: [
        MyInfluencersComponent,
        InfluencerCardComponent,
        InfluencerDetailComponent,
        InfluencerDetailComponent,
        PostCardComponent,
        PostDetailComponent
    ],
    imports: [
        SharedModule,
        MyInfluencersRoutingModule,
        DashboardModule,
        SidenavigationModule,
        NgxSliderModule
    ],
    exports: [
        MyInfluencersComponent,
        InfluencerCardComponent,
        InfluencerDetailComponent
    ],
    providers: []
})

export class MyInfluencersModule {

}