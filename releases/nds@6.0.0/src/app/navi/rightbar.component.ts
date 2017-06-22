/**
 * 右下导航按钮组件
 * 此组件目前只有view，布局外观样式等
 * 尚未实线具体逻辑
 */
import { Component } from "@angular/core";

@Component({
    moduleId: 'rightbottom-navi',
    selector: 'rightbottom-navi',
    template: `
    <div class="btn-group-vertical">
        <a class="btn btn-primary">全国</a>
        <a class="btn btn-primary">华北区域</a>
        <a class="btn btn-primary">华东区域</a>
        <a class="btn btn-primary">山东区域</a>
        <a class="btn btn-primary">华南区域</a>
    </div>
    `,
    styles: [``],

})
export class RightbarNaviComponent {
    
}