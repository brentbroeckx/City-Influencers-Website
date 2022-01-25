import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminOverviewComponent } from "./admin-overview-tab/admin-overview.component";

const routes: Routes = [
    { path: '', component: AdminOverviewComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminOverviewRoutingModule {

}