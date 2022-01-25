import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RequestRoutingModule } from "./requests-routing.module";
import { RequestsComponent } from "./requests-tab/requests.component";


@NgModule({
    declarations: [
        RequestsComponent,
    ],
    imports: [
        SharedModule,
        RequestRoutingModule,
    ],
    exports: [
        RequestsComponent,
        
    ],
    providers: []
})

export class RequestsModule {

}