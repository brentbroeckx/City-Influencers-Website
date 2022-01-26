import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfluencerDetailComponent } from "./my-influencers-tab/influencer-detail/influencer-detail.component";
import { MyInfluencersComponent } from "./my-influencers-tab/my-influencers.component";

const routes: Routes = [
    { path: '', component: MyInfluencersComponent},
    { path: 'detail/:id', component: InfluencerDetailComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyInfluencersRoutingModule {

}