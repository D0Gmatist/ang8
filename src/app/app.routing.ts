import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        loadChildren: () => import('./lazy-loading/main/main.module').then( m => m.MainModule )
    },
    {
        path: 'ru',
        children: [
            {
                path: '',
                pathMatch: 'prefix',
                loadChildren: () => import('./lazy-loading/main/main.module').then( m => m.MainModule )
            },
            {
                path: '**',
                pathMatch: 'prefix',
                loadChildren: () => import('./lazy-loading/page/page.module').then( m => m.PageModule )
            }
        ]
    },
    {
        path: 'ua',
        children: [
            {
                path: '',
                pathMatch: 'prefix',
                loadChildren: () => import('./lazy-loading/main/main.module').then( m => m.MainModule )
            },
            {
                path: '**',
                pathMatch: 'prefix',
                loadChildren: () => import('./lazy-loading/page/page.module').then( m => m.PageModule )
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'prefix',
        loadChildren: () => import('./lazy-loading/page/page.module').then( m => m.PageModule )
    }
];

export const APP_ROUTING = RouterModule.forRoot( routes );
