import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { GroupIndexComponent } from './group-leader/index.component';
import { GroupIndex2Component } from './group-leader/index2.component';


const routes: Routes = [
                            {   
                                path: '',
                                component: GroupIndexComponent,
                            },
                            {   
                                path: 'group-leader/map',
                                component: GroupIndexComponent,
                            },
                            {   
                                path: 'group-leader/project',
                                component: GroupIndex2Component,
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