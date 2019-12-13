import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule }                     from "@angular/common";

// Component
import { PageComponent } from "./page.component";

import { PAGE_ROUTING }                     from "./page.routing";

@NgModule({
    declarations: [
        PageComponent

    ],
    imports: [

        PAGE_ROUTING,

        ReactiveFormsModule,
        CommonModule,
        FormsModule,

    ],
    providers: [

    ]

})
export class PageModule {}
