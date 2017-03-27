import { Component } from "@angular/core";

@Component({
    moduleId: 'leftbar-navi',
    selector: 'leftbar-navi',
    template: `
    <div class="btn-group">
        <a class="btn btn-primary" routerLink="/group-leader/map" >区域地图</a>
        <a class="btn btn-primary" routerLink="/group-leader/project" >泛能项目</a>
    </div>
    `,
    styles: [``],
})
export class LeftbarNaviComponent {}