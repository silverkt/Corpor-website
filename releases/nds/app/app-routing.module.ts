import { NgModule }      from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { Mainboardlv1Component } from './mainboard.lv1.component';
import { TestComponent } from './test.component';


const routes: Routes = [
                            {   
                                path: '',
                                component: Mainboardlv1Component,
                            },
                            
                            {
                                path: 'heroes/:id',
                                component: TestComponent,                                                    
                            },
                            
                            
                        ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ], 
})
export class AppRoutingModule { }
