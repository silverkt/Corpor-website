/**
 * 路由组件
 * 匹配路径后加载对应组件，设置默认组件为集团领导组件
 * 设置路径显示为hash显示，避免因服务器url重写设置不统一而带来的不兼容
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { GroupIndexComponent } from './group-leader/index.component';
import { GroupIndex2Component } from './group-leader/index2.component';


const routes: Routes = [
                            {   
                                path: '',
                                component: GroupIndexComponent,
                            },
                            {   
                                path: 'group-leader/map',
                                component: GroupIndexComponent,
                            },
                            {   
                                path: 'group-leader/project',
                                component: GroupIndex2Component,
                            },
                            { 
                                path: ':id',
                                component: AppComponent,
                            }                                         
                            
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
      useHash: true
  })],
  exports: [ RouterModule ], 
})
export class AppRoutingModule { }