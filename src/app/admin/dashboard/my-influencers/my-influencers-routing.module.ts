import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyInfluencersComponent } from "./my-influencers-tab/my-influencers.component";

const routes: Routes = [
    { path: '', component: MyInfluencersComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyInfluencersRoutingModule {

}