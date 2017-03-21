import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupIndexComponent } from './group-leader/index.component';
import { AppComponent } from './app.component';

const routes: Routes = [
                            {   
                                path: '',
                                component: GroupIndexComponent,
                            },
                            { 
                                path: ':id',
                                component: AppComponent,
                            }                                         
                            
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
      useHash: true
  })],
  exports: [ RouterModule ], 
})
export class AppRoutingModule { }