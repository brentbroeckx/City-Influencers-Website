import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MyInfluencersComponent } from './admin/dashboard/my-influencers/my-influencers.component';
import { OverviewComponent } from './admin/dashboard/overview/overview.component';
import { AppDownloadPageComponent } from './app-download-page/app-download-page.component';
import { AuthGuard } from './auth/authGuard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: OverviewComponent},
  { path: 'download-page', component: AppDownloadPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'dashboard/overview', component: OverviewComponent, canActivate: [AuthGuard]},
  { path: 'dashboard/my-influencers', component: MyInfluencersComponent, canActivate: [AuthGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
