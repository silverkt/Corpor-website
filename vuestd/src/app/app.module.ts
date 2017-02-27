import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {  AppRoutingModule } from './routeing-mod';

 
import { RootComponent } from './root.component';
import { AppComponent } from './app.component';
import { SecondComponent } from './second.component';

@NgModule({
  declarations: [
    RootComponent,
    AppComponent,
    SecondComponent
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
