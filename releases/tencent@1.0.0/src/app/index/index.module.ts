import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';


import { RouterModule } from "@angular/router";
import { routes } from "./routes";
 

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [MainComponent]
})
export class IndexModule { 
  constructor() {
    console.log('shit on');
  }
}
