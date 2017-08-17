import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PageComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
