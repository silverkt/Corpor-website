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
            <a class="btn btn-primary">能源结构</a>
            <a class="btn btn-primary">产能分析</a>
            <a class="btn btn-primary">社会效益</a>
            <a class="btn btn-primary">泛能交易</a>
            <a class="btn btn-primary">对比排名</a>
        </div> 
    `,
    styles: [``],
})
export class BottombarNaviComponent {

}