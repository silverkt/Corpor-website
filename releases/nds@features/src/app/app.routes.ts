import { UserComponent } from "./user/user.component";
import { PageComponent } from "./page/page.component";
import { Page2Component } from './page2/page2.component'; 

export const routes: any = [
	{
		path: '',
		redirectTo: 'user',
		pathMatch: 'full'
	},
 
	{
		path: 'user',
		component: UserComponent
	},
	{
		path: 'page',
		component: PageComponent
	},
	{
		path: 'page2',
		component: Page2Component
	},
	{
		path: 'admin',
		loadChildren: './admin/admin.module#AdminModule'
	},
	{
		path: 'chrouter',
		loadChildren: './chrouter/chrouter.module#ChrouterModule'
	}

];
 