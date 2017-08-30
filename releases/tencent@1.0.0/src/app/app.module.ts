/**
 * 根模块
 * 入口文件首先加载此模块，此模块将引入基础angular模块和核心模块
 * 声明组件及引导根组件
 */

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { RootComponent } from "./root.component";
import { RouterModule } from "@angular/router";

import { routes } from "./app.routing.component";

import { SecondComponent } from './second/second.component';


import { PieModule } from "./pie/pie.component"
 
@NgModule({
  declarations: [
    RootComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,  
    
    RouterModule.forRoot(routes)
  ],
  bootstrap: [RootComponent]
})
export class AppModule {

 }
