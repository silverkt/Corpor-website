/**
 * 根组件
 * 原始模板上渲染的根组件，此组件和路由模块配合，将作为路由模块的显示
 */
import { Component } from "@angular/core";

@Component({
    moduleId: 'approot',
    selector: 'app-root',
    template: `<router-outlet>    
</router-outlet>`,

})
export class RootComponent {
    
}