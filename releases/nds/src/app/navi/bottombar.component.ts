/**
 * 底部导航按钮组件
 * 此组件目前只有view，布局外观样式等
 * 尚未实线具体逻辑
 */
import { Component } from "@angular/core";

@Component({
    moduleId: 'bottom-nav',
    selector: 'bottom-navi',
    template: `
        <div class="btn-group">
            <a class="btn btn-primary" routerLink="/group-leader/map" >首页</a>
            <a class="btn btn-primary">分区</a>
            <a class="btn btn-primary">重点项目</a>
        </div> 
    `,
    styles: [``],
})
export class BottombarNaviComponent {

}