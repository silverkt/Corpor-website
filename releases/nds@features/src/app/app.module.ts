import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PageComponent
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
