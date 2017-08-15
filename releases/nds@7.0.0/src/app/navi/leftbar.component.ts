/**
 * 左下导航组件 分别为 
 * 区域地图和凡能项目导航
 * 此处导航和主模块中的导航组件中的逻辑相配合共同完成导航功能
 */
import { Component } from "@angular/core";

@Component({
    moduleId: 'leftbar-navi',
    selector: 'leftbar-navi',
    template: `
    <div class="buttondiv">
    <div class="btn-group">
 
               <a  class="btn btn-primary" href="http://222.222.120.73:808/v7.3/#/">全国首页</a> 
               <a  class="btn btn-primary" href="http://222.222.120.73:808/v8.3/#/enstruct/a">能源结构</a>
               <a  class="btn btn-primary" href="http://222.222.120.73:808/v8.3/#/enanalyze/a">能源分析</a>
               <a  class="btn btn-primary" href="http://222.222.120.73:808/v8.3/#/ecoeffect/a">经济效用</a>
               <a  class="btn btn-primary" href="http://222.222.120.73:808/v8.3/#/socialeffect/a">社会效用</a>
               <a  class="btn btn-primary" href="http://222.222.120.73:808/v8.3/#/ranking/a">全国排名</a>
          

   

    </div>
    </div>
    `,
    styles: [`
    
.buttondiv {
    width: 700px;
 
    position: absolute;
    bottom:20px;
    left: 0px;
    /*background-color: #fff; */
    z-index: 1001;
      
}
    
    `],
})
export class LeftbarNaviComponent {}