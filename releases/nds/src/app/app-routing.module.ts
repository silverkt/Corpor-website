import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnergyPercentageDetailComponent } from './energy-percentage-detail/energy.percentage.detail.component';
import { Mainboardlv1Component } from './mainboard.lv1.component';
import { Mainboardlv2Component } from './mainboard.lv2.component';
import { TestComponent } from './test.component';


const routes: Routes = [
                            {   
                                path: '',
                                component: Mainboardlv1Component,
                            },
                            
                            {
                                path: 'prov/:id',
                                component: Mainboardlv2Component,                                                    
                            },

                            {
                                path: 'heroes/:id',
                                component: TestComponent,                                                    
                            },
                            {
                                path: 'percentage/:id',
                                component: EnergyPercentageDetailComponent,
                            },
                            
                            
                        ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ], 
})
export class AppRoutingModule { }
