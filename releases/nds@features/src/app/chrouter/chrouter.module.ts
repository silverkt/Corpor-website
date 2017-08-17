import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tpage1Component } from './tpage1/tpage1.component';
import { Tpage2Component } from './tpage2/tpage2.component';
import { ChrouterComponent } from './chrouter.component';

import { RouterModule } from '@angular/router';
import { routess } from './chrouter.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routess)
  ],
  declarations: [Tpage1Component, Tpage2Component, ChrouterComponent]
})
export class ChrouterModule {
    constructor() {
      console.log('chrouter loaded')
    }
 }
