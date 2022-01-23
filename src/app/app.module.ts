import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavigationComponent } from './admin/dashboard/navigation/side-navigation.component';
import { AppDownloadPageComponent } from './app-download-page/app-download-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OverviewComponent } from './admin/dashboard/overview/overview.component';
import { DashboardHeaderComponent } from './admin/dashboard/dashboard-header/dashboard-header.component';
import { InfluencerCardComponent } from './admin/dashboard/my-influencers/influencer-card/influencer-card.component';
import { AuthGuard } from './auth/authGuard';
import { MyInfluencersComponent } from './admin/dashboard/my-influencers/my-influencers-tab/my-influencers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HowItWorksComponent,
    FooterComponent,
    AppDownloadPageComponent,
    LoginComponent,
    SignUpComponent,
    OverviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
