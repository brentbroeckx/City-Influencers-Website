import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { SideNavigationComponent } from "./side-navigation.component";


@NgModule({
    declarations: [
        SideNavigationComponent
    ],
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        SideNavigationComponent

    ],
    providers: []
})

export class SidenavigationModule {

}