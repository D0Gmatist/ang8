import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule }                     from "@angular/common";

// Component
import { MainComponent } from "./main.component";

import { MAIN_ROUTING }                     from "./main.routing";

@NgModule({
    declarations: [
        MainComponent

    ],
    imports: [

        MAIN_ROUTING,

        ReactiveFormsModule,
        CommonModule,
        FormsModule,

    ],
    providers: [

    ]

})
export class MainModule {}
