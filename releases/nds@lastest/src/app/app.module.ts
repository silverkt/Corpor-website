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
import { RootComponent } from "./root.component";

import { BottomNaviComponent } from "./navigations/bottom.navi";

import { IndexComponent } from "./pages/index/index.component";
import { EnStructComponent } from "./pages/energy_structure/energy_structure.page";
import { EnAnalyzeComponent } from "./pages/energy_analyze/energy_analyze.page";
import { EcoEffectComponent } from "./pages/eco_effect/eco_effect.page";
import { SocialEffectComponent } from "./pages/social_effect/social_effect.page";







import { PieComponent } from "./components/pie/pie.component";
import { MapComponent } from "./components/map/map.component";
import { Pie2Component } from "./components/pie2/pie2.component";
import { LineComponent } from "./components/line/line.component";
import { Line2Component } from "./components/line2/line2.component";
import { EnergySocietyComponent } from "./components/circle/energysociety.component";
import { EnergyCircleComponent } from "./components/circle/circle.component";



import { PieAnalyzeComponent } from "./pages/energy_analyze/components/pie/pie.component";

  
//import { PieAnalyzeComponent } from "./pages/energy_analyze/components/pie/pie.component";


@NgModule({
  declarations: [
    RootComponent,
    IndexComponent,
    EnStructComponent,
    EnAnalyzeComponent,
    EcoEffectComponent,
    SocialEffectComponent,
    EnergySocietyComponent, 
    BottomNaviComponent,   
    PieComponent,  
    Pie2Component, 
    LineComponent,
    Line2Component,
    EnergyCircleComponent,
    MapComponent, 




     PieAnalyzeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  //entryComponents:[ TestComponent, Test1Component ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
