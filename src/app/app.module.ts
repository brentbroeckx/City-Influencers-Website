import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppDownloadPageComponent } from './app-download-page/app-download-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth/authGuard';
import { SharedModule } from './shared/shared.module';
import { BrowseCitiesComponent } from './browse-cities/browse-cities.component';
import { CityCardComponent } from './browse-cities/city-card/city-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './error-pages/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './error-pages/forbidden/forbidden.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { BadGatewayComponent } from './error-pages/bad-gateway/bad-gateway.component';
import { ServiceUnavailableComponent } from './error-pages/service-unavailable/service-unavailable.component';
import { TimeOutComponent } from './error-pages/time-out/time-out.component';
import { FaqComponent } from './faq/faq.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { CountUpModule } from 'ngx-countup';

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
    BrowseCitiesComponent,
    CityCardComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    ForbiddenComponent,
    ServerErrorComponent,
    BadGatewayComponent,
    ServiceUnavailableComponent,
    TimeOutComponent,
    FaqComponent,
    PrivacyPolicyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dbyo9rarj'} as CloudinaryConfiguration),
    CountUpModule,
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
