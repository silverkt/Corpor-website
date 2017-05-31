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
 
import { LeftbarNaviComponent } from "./navi/leftbar.component";
 
import { RightbarNaviComponent } from "./navi/rightbar.component";
import { RootComponent } from "./root.component";
import { TopbarNaviComponent } from "./navi/topbar.component";



import { HomeIndexComponent } from "./home/index.component";
import { OperationComponent } from "./home/operation.component";
import { PartitionIndexComponent } from "./partition/index.component";
import { ProjectsIndexComponent } from "./projects/index.component";
import { TradeComponent } from "./home/trade.component";


//home index
import { CompareBenifitComponent } from "./home/component/comparebenifit.component";
import { CompareRunningComponent } from "./home/component/comparerunning.component";
import { CompareTradeComponent } from "./home/component/comparetrade.component";
import { NationalProfitComponent } from "./home/component/nationalprofit.component";
import { NationalRankComponent } from "./home/component/nationalrank.component";
import { NationalTradeComponent } from "./home/component/nationaltrade.component";

//projects
import { Project1Component } from "./projects/project1.component";
import { Project2Component } from "./projects/project2.component";
import { Project3Component } from "./projects/project3.component";
import { Project4Component } from "./projects/project4.component";

import { TestComponent } from "./partition/test.component";
import { Test1Component } from "./partition/test1.component";





@NgModule({
  declarations: [
  
    BottombarNaviComponent,
    
    LeftbarNaviComponent,
 
    RightbarNaviComponent,
    RootComponent,
    TopbarNaviComponent,

    HomeIndexComponent,
    OperationComponent,
    PartitionIndexComponent,
    ProjectsIndexComponent,
    TradeComponent,
    TestComponent,
    Test1Component,

    CompareBenifitComponent,
    CompareRunningComponent,
    CompareTradeComponent,
    NationalProfitComponent,
    NationalRankComponent,
    NationalTradeComponent,


    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,


    
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
