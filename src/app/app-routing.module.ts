import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OverviewComponent } from './admin/dashboard/overview/overview.component';
import { AppDownloadPageComponent } from './app-download-page/app-download-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'download-page', component: AppDownloadPageComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
