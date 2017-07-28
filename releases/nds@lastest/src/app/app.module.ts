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
import { MapComponent } from "./components/map/map.component";
import { PieComponent } from "./components/pie/pie.component";
import { LineComponent } from "./components/line/line.component";
import { CircleComponent } from "./components/circle/circle.component";
import { IndexComponent } from "./pages/index/index.component";

import { EnStructPage } from "./pages/energy_structure/energy_structure.page";
import { PieStructComponent } from "./pages/energy_structure/pie/pie.component";

import { EnAnalyzePage } from "./pages/energy_analyze/energy_analyze.page";
import { PieAnalyzeComponent } from "./pages/energy_analyze/pie/pie.component";
import { LineAnalyzeComponent } from "./pages/energy_analyze/line/line.component";

import { EcoEffectPage } from "./pages/eco_effect/eco_effect.page";
import { PieEcoComponent } from "./pages/eco_effect/pie/pie.component";
import { LineEcoComponent } from "./pages/eco_effect/line/line.component";

import { SocialEffectPage } from "./pages/social_effect/social_effect.page";
import { CircleSocialComponent } from "./pages/social_effect/circle/circle.component";
import { LineSocialComponent } from "./pages/social_effect/line/line.component";


@NgModule({
  declarations: [
    RootComponent,
    IndexComponent,
    PieComponent,
    LineComponent,
    CircleComponent,

    EnStructPage,
       PieStructComponent,
    EnAnalyzePage,
       PieAnalyzeComponent,
       LineAnalyzeComponent,
    EcoEffectPage,
       PieEcoComponent,
       LineEcoComponent,
    SocialEffectPage,
       CircleSocialComponent,
       LineSocialComponent,
 
    BottomNaviComponent,   

    MapComponent,   
 
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
