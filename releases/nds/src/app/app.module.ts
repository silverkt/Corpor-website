/**
 * 根模块
 * 入口文件首先加载此模块，此模块将引入基础angular模块和核心模块
 * 声明组件及引导根组件
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 
import { AppRoutingModule } from "./app.routing.component";
import { BottombarNaviComponent } from "./navi/bottombar.component";
import { CompareBenifitComponent } from "./group-leader/component/comparebenifit.component";
import { CompareRunningComponent } from "./group-leader/component/comparerunning.component";
import { CompareTradeComponent } from "./group-leader/component/comparetrade.component";
import { GroupIndexComponent } from './group-leader/index.component';
import { GroupIndex2Component } from './group-leader/index2.component';
import { LeftbarNaviComponent } from "./navi/leftbar.component";
import { NationalProfitComponent } from "./group-leader/component/nationalprofit.component";
import { NationalRankComponent } from "./group-leader/component/nationalrank.component";
import { NationalTradeComponent } from "./group-leader/component/nationaltrade.component";
import { RightbarNaviComponent } from "./navi/rightbar.component";
import { RootComponent } from "./root.component";
import { TopbarNaviComponent } from "./navi/topbar.component";



import { HomeIndexComponent } from "./home/index.component";
import { PartitionIndexComponent } from "./partition/index.component";
import { ProjectsIndexComponent } from "./projects/index.component";


import { TestComponent } from "./partition/test.component";
import { Test1Component } from "./partition/test1.component";




@NgModule({
  declarations: [
  
    BottombarNaviComponent,
    CompareBenifitComponent,
    CompareRunningComponent,
    CompareTradeComponent,
    GroupIndexComponent,
    GroupIndex2Component,
    LeftbarNaviComponent,
    NationalProfitComponent,
    NationalRankComponent,
    NationalTradeComponent,
    RightbarNaviComponent,
    RootComponent,
    TopbarNaviComponent,

    HomeIndexComponent,
    PartitionIndexComponent,
    ProjectsIndexComponent,
    TestComponent,
    Test1Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  entryComponents:[ TestComponent, Test1Component ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
