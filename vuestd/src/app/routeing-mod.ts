import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SecondComponent } from './second.component';

const routes: Routes = [
                            {   
                                path: '',
                                component: AppComponent,
                            },
                            { 
                                path: 'sec',
                                component: SecondComponent,
                            },
                            { 
                                path: 'vid/:id',
                                component: SecondComponent,
                            }
                                          
                            
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ], 
})
export class AppRoutingModule { }