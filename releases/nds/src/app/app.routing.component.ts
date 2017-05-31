/**
 * 路由组件
 * 匹配路径后加载对应组件，设置默认组件为集团领导组件
 * 设置路径显示为hash显示，避免因服务器url重写设置不统一而带来的不兼容
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

 
 

import { HomeIndexComponent } from "./home/index.component";
import { OperationComponent } from "./home/operation.component";
import { TradeComponent } from "./home/trade.component";
import { PartitionIndexComponent } from "./partition/index.component";
import { ProjectsIndexComponent } from "./projects/index.component";


const routes: Routes = [
                            {   
                                path: '',
                                component: HomeIndexComponent,
                            },
                            {   
                                path: 'home/index',
                                component: HomeIndexComponent,
                            },
                            {   
                                path: 'partition/index',
                                component: PartitionIndexComponent,
                            },
                            {   
                                path: 'projects/index',
                                component: ProjectsIndexComponent,
                            },
                            {   
                                path: 'home/operation',
                                component: OperationComponent,
                            },
                            {   
                                path: 'home/trade',
                                component: TradeComponent,
                            },                                        
                            
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
      useHash: true
  })],
  exports: [ RouterModule ], 
})
export class AppRoutingModule { }