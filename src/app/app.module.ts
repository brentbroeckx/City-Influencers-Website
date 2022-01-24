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
import { AppDownloadPageComponent } from './app-download-page/app-download-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth/authGuard';
import { SharedModule } from './shared/shared.module';
import { BrowseCitiesComponent } from './browse-cities/browse-cities.component';
import { CityCardComponent } from './browse-cities/city-card/city-card.component';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
