import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./admin-dashboard/admin-overview/admin-overview.module').then(m => m.AdminOverviewModule)},
  {path: 'requests', loadChildren: () => import('./admin-dashboard/requests/requests.module').then(m => m.RequestsModule)},
  {path: 'settings', loadChildren: () => import('./admin-dashboard/settings/settings.module').then(m => m.SettingsModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {
}