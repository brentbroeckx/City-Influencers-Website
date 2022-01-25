import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDownloadPageComponent } from './app-download-page/app-download-page.component';
import { BrowseCitiesComponent } from './browse-cities/browse-cities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', loadChildren: () => import('./admin/city-dashboard.module').then(m => m.CityDashboardModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin-dashboard.module').then(m => m.AdminModule)},
  { path: 'download-page', component: AppDownloadPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'browse-cities', component: BrowseCitiesComponent},
  { path: 'contact-us', component: ContactUsComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
