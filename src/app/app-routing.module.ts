import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppDownloadPageComponent } from './app-download-page/app-download-page.component';
import { BrowseCitiesComponent } from './browse-cities/browse-cities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', loadChildren: () => import('./admin/city-dashboard.module').then(m => m.CityDashboardModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin-dashboard.module').then(m => m.AdminModule)},
  { path: 'download-page', component: AppDownloadPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'browse-cities', component: BrowseCitiesComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},

  //Error pages:
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
