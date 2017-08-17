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
    <div class="btn-group">
        <a class="btn btn-primary" routerLink="/home/operation" >运营管理</a>
        <a class="btn btn-primary" routerLink="/home/trade" >能源交易</a>
    </div>
    `,
    styles: [``],
})
export class LeftbarNaviComponent {}