import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import { MyInfluencersModule } from './dashboard/my-influencers/my-influencers.module';
import { MyTasksModule } from './dashboard/my-tasks/my-tasks.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AdminRoutingModule,
  ],
  exports: [
    MyInfluencersModule,
    MyTasksModule
  ]
})
export class AdminModule {
}