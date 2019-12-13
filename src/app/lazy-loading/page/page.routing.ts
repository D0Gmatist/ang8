import { RouterModule, Routes } from '@angular/router';

// Component
import { PageComponent } from "./page.component";

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        resolve: {}
    }

];

export const PAGE_ROUTING = RouterModule.forChild( routes );
