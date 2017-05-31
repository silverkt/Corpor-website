/**
 * 顶部导航按钮组件
 * 此组件目前只有view，布局外观样式等
 * 尚未实线具体逻辑
 */
import { Component } from "@angular/core";

@Component({
    moduleId: 'topbar-navi',
    selector: 'topbar-navi',
    template: `
        <div class="btn-group">
            <a class="btn btn-primary">光伏</a>
            <a class="btn btn-primary">CCHP</a>
            <a class="btn btn-primary">地源热泵</a>
            <a class="btn btn-primary">燃气锅炉</a>
        </div>
    
    `,
    styles: [``],
})
export class TopbarNaviComponent {

}