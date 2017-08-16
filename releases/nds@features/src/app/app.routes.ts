import { UserComponent } from "./user/user.component";
import { PageComponent } from "./page/page.component";
 

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
	}

];
 