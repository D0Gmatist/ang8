import { RouterModule, Routes } from '@angular/router';

// Component
import { MainComponent } from "./main.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        resolve: {}
    }

];

export const MAIN_ROUTING = RouterModule.forChild( routes );
