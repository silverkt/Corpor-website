/**
 * 根模块
 * 入口文件首先加载此模块，此模块将引入基础angular模块和核心模块
 * 声明组件及引导根组件
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.component";
import { BottombarNaviComponent } from "./navi/bottombar.component";
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




@NgModule({
  declarations: [
    AppComponent,
    BottombarNaviComponent,
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
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
