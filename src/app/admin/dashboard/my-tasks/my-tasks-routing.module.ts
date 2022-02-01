import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyTasksDetailComponent } from "./my-tasks-tab/my-tasks-detail/my-tasks-detail.component";
import { MyTasksComponent } from "./my-tasks-tab/my-tasks.component";

const routes: Routes = [
    { path: '', component: MyTasksComponent},
    { path: 'detail/:id', component: MyTasksDetailComponent}


]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyTasksRoutingModule {

}