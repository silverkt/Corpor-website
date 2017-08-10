/**
 * 路由组件
 * 匹配路径后加载对应组件，设置默认组件为集团领导组件
 * 设置路径显示为hash显示，避免因服务器url重写设置不统一而带来的不兼容
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

 
 

import { IndexComponent } from "./pages/index/index.component";
import { EnStructPage } from "./pages/energy_structure/energy_structure.page";
import { EnAnalyzePage } from "./pages/energy_analyze/energy_analyze.page"; 
import { EcoEffectPage } from "./pages/eco_effect/eco_effect.page";
import { SocialEffectPage } from "./pages/social_effect/social_effect.page";
import { EnRankPage } from "./pages/energy_ranking/energy_ranking.page";
import { OperSerPage } from "./pages/energy_oper_ser/energy_oper_ser.page";
import { OperStdPage } from "./pages/energy_oper_std/energy_oper_std.page";

const routes: Routes = [
                            {   
                                path: '',
                                component: EnStructPage,
                            },
                            {   
                                path: 'enstruct/:scene',
                                component: EnStructPage,
                            },
                            {
                                path: 'enanalyze/:scene',
                                component: EnAnalyzePage,
                            },
                            {
                                path: 'ecoeffect/:scene',
                                component: EcoEffectPage,
                            },
                            {
                                path: 'socialeffect/:scene',
                                component: SocialEffectPage,
                            },                        
                            {   
                                path: 'partition/index',
                                component: IndexComponent,
                            },
                            {   
                                path: 'ranking/:scene',
                                component: EnRankPage,
                            },
                            {   
                                path: 'operser/:scene',
                                component: OperSerPage,
                            },
                            {   
                                path: 'operstd/:scene',
                                component: OperStdPage,
                            },
                            
                          
                            {
                                path: 'proj/:id/:s',
                                component: IndexComponent,
                            }

                            
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
      useHash: true
  })],
  exports: [ RouterModule ], 
})
export class AppRoutingModule { }