import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { MainboardComponent } from './mainboard.component';
import { EnergyvideoComponent } from './energy.video.component';
import { EnergyanalysisComponent } from './energy.analysis.component';
import { EnergytrendComponent } from './energy.trend.component';
import { EnergymapComponent } from './energy.map.component';

import { TestComponent } from './test.component';

 
 @NgModule({
  imports:      [ 
                      BrowserModule,   
                      AppRoutingModule, 
                      HttpModule  
                ],
  declarations: [ 
                      MainboardComponent, 
                      TestComponent, 
                      EnergyvideoComponent, 
                      EnergyanalysisComponent, 
                      EnergytrendComponent, 
                      EnergymapComponent
                 ],
  bootstrap:    [ MainboardComponent ],
  providers: [ ],  
})
export class AppModule { 
   
}
