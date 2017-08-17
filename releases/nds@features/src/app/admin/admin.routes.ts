import { OtherComponent } from './other/other.component';
import { Other2Component } from './other2/other2.component';

export const routes = [
    {
        path: '',
        redirectTo: "other",
        pathMatch: 'full'
    },
    {
        path: 'other',
        component: OtherComponent
    },
    {
        path: 'other2',
        component: Other2Component
    }
];