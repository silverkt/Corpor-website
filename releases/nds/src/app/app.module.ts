import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.component";
import { BottombarNaviComponent } from "./navi/bottombar.component";
import { GroupIndexComponent } from './group-leader/index.component';
import { GroupIndex2Component } from './group-leader/index2.component';
import { LeftbarNaviComponent } from "./navi/leftbar.component";
import { RightbarNaviComponent } from "./navi/rightbar.component";
import { RootComponent } from "./root.component";
import { TopbarNaviComponent } from "./navi/topbar.component";




@NgModule({
  declarations: [
    AppComponent,
    BottombarNaviComponent,
    GroupIndexComponent,
    GroupIndex2Component,
    LeftbarNaviComponent,
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
