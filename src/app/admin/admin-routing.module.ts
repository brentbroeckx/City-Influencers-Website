import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  //{path: 'overview', component: OverviewComponent},
  {path: 'my-influencers', loadChildren: () => import('./dashboard/my-influencers/my-influencers.module').then(m => m.MyInfluencersModule)},
  {path: 'my-tasks', loadChildren: () => import('./dashboard/my-tasks/my-tasks.module').then(m => m.MyTasksModule)},
  {path: 'overview', loadChildren: () => import('./dashboard/overview/overview.module').then(m => m.OverviewModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}