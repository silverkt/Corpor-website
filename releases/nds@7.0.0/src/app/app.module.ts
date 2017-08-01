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
import { ProjcIndexComponent } from "./proj/index.component";
import { OperationComponent } from "./home/operation.component";
import { PartitionIndexComponent } from "./partition/index.component";
import { ProjectsIndexComponent } from "./projects/index.component";
import { TradeComponent } from "./home/trade.component";


//home index
import { NationalRankComponent } from "./home/component/nationalrank.component";
 
import { EnergyStructureComponent } from "./home/component/energystructure.component";
import { EnergySupplyComponent } from "./home/component/energysupply.component";
import { EnergyEcoComponent } from "./home/component/energyeco.component";
import { EnergySocietyComponent } from "./home/component/energysociety.component";
import { EnergyDailyComponent } from "./home/component/energydaily.component";

//proj index

//scada index
import { ScadaIndexComponent } from "./scada/index.component";

// station index
import { StationsIndexComponent } from "./stations/index.component";
 


//projects
import { Project1Component } from "./projects/project1.component";
import { Project2Component } from "./projects/project2.component";
import { Project3Component } from "./projects/project3.component";
import { Project4Component } from "./projects/project4.component";

import { TestComponent } from "./partition/test.component";
import { Test1Component } from "./partition/test1.component";


import { ErrorComponent } from "./proj/error.component";


@NgModule({
  declarations: [
  
    BottombarNaviComponent,
    
    LeftbarNaviComponent,
 
    RightbarNaviComponent,
    RootComponent,
    TopbarNaviComponent,

    HomeIndexComponent,
    ProjcIndexComponent,
    OperationComponent,
    PartitionIndexComponent,
    ProjectsIndexComponent,
    TradeComponent,
    TestComponent,
    Test1Component,

    NationalRankComponent,
    EnergyStructureComponent,
    EnergySupplyComponent,
    EnergyEcoComponent,
    EnergySocietyComponent,
    EnergyDailyComponent,


    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    ScadaIndexComponent,
    StationsIndexComponent,
    ErrorComponent


    
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
