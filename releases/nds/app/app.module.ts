import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

 

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

 
 




@NgModule({
  imports:      [ BrowserModule,  AppRoutingModule, HttpModule  ],
  declarations: [ AppComponent, TestComponent],
  bootstrap:    [ AppComponent ],
  providers: [ ],  
})
export class AppModule { 
   
}
