import { Tpage1Component } from './tpage1/tpage1.component';
import { Tpage2Component } from './tpage2/tpage2.component';
import { ChrouterComponent } from './chrouter.component';

export const routess: any = [
    {
        path: '',
        component: ChrouterComponent,
        children: [
            {
                path: '',
                redirectTo: 'tpage1',
                pathMatch: 'full'
            },
            {
                path: 'tpage1',
                component: Tpage1Component
            },
            {
                path: 'tpage2',
                component: Tpage2Component
            }

        ]
    }   
];
