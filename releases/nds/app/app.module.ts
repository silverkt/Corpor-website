import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { MainboardComponent } from './mainboard.component';
import { Mainboardlv1Component } from './mainboard.lv1.component';
import { EnergyvideoComponent } from './energy.video.component';
import { EnergyanalysisComponent } from './energy.analysis.component';
import { EnergytrendComponent } from './energy.trend.component';
import { EnergymapComponent } from './energy.map.component';

import { EnergypercentageComponent } from './energy.percentage.component';
import { EnergypercentageallComponent } from './energy.percentage.all.component';
import { Energypercentageco2Component } from './energy.percentage.co2.component';
import { EnergypercentagesaveComponent } from './energy.percentage.save.component';

import { Mainboardlv2Component } from './mainboard.lv2.component';
import { Energymaplv2Component } from './energy.map.lv2.component';

import { TestComponent } from './test.component';

 
 @NgModule({
  imports:      [ 
                      BrowserModule,   
                      AppRoutingModule, 
                      HttpModule  
                ],
  declarations: [ 
                      MainboardComponent, 
                      Mainboardlv1Component,
                      Mainboardlv2Component,
                      TestComponent, 
                      EnergyvideoComponent, 
                      EnergyanalysisComponent, 
                      EnergytrendComponent, 
                      EnergymapComponent,

                      EnergypercentageComponent,
                      EnergypercentageallComponent,
                      Energypercentageco2Component,
                      EnergypercentagesaveComponent,
                      
                      Energymaplv2Component
                 ],
  bootstrap:    [ MainboardComponent ],
  providers: [ ],  
})
export class AppModule { 
   
}
