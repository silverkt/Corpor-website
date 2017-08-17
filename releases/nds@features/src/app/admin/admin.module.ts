import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other/other.component';
import { Other2Component } from './other2/other2.component';

import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtherComponent, Other2Component]
})
export class AdminModule { }
