/**
 * 路由组件
 * 匹配路径后加载对应组件，设置默认组件为集团领导组件
 * 设置路径显示为hash显示，避免因服务器url重写设置不统一而带来的不兼容
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

 
 

import { IndexComponent } from "./pages/index/index.component";
import { EnStructComponent } from "./pages/energy_structure/energy_structure.page";
import { EnAnalyzeComponent } from "./pages/energy_analyze/energy_analyze.page"; 
import { EcoEffectComponent } from "./pages/eco_effect/eco_effect.page";
import { SocialEffectComponent } from "./pages/social_effect/social_effect.page";

const routes: Routes = [
                            {   
                                path: '',
                                component: EnStructComponent,
                            },
                            {   
                                path: 'enstruct',
                                component: EnStructComponent,
                            },
                            {
                                path: 'enanalyze',
                                component: EnAnalyzeComponent,
                            },
                            {
                                path: 'ecoeffect',
                                component: EcoEffectComponent,
                            },
                            {
                                path: 'socialeffect',
                                component: SocialEffectComponent,
                            },                        
                            {   
                                path: 'partition/index',
                                component: IndexComponent,
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