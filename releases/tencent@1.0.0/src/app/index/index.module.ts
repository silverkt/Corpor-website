import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from "@angular/router";
import { routes } from "./routes";
 

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MainComponent]
})
export class IndexModule { 
  constructor() {
    console.log('shit on');
  }
}
