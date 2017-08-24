/**
 * 路由组件
 * 匹配路径后加载对应组件，设置默认组件为集团领导组件
 * 设置路径显示为hash显示，避免因服务器url重写设置不统一而带来的不兼容
 */

 
import { SecondComponent } from "./second/second.component";
 
 
 

export const routes: any = [
                            {   
                                path: '',
                                redirectTo: 'index',
                                pathMatch : 'full'
                            },
                            {
                                path: 'index',
                                loadChildren : './index/index.module#IndexModule'
                            },
                            {
                                path: 'second',
                                component : SecondComponent
                            }
 
                            
                        ];
 