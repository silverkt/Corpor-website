/**
 * 底部导航按钮组件
 * 此组件目前只有view，布局外观样式等
 * 尚未实线具体逻辑
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: 'bottom-nav',
    selector: 'bottom-navi',
    template: `
        <div class="btn-group">
            <a class="btn btn-primary" routerLink="/home/index" >返回全国界面</a>
            <a class="btn btn-primary" [routerLink]="link">进入站内scada界面</a>
           <!--  <a class="btn btn-primary" routerLink="#" >进入站内scada界面</a> -->
            
          <!--  <a class="btn btn-primary" routerLink="/partition/index">分区</a>
            <a class="btn btn-primary" routerLink="/projects/index">重点项目</a> -->
        </div> 
    `,
    styles: [``],
})
export class BottombarNaviComponent implements OnInit {
    constructor(public router: ActivatedRoute, public http: Http){} 
    link: Array<string> = ['/scada','http://www.baidu.com'];

    ngOnInit() {
        this.router.params.subscribe((params: any) => {
            console.log("http://pz.webcity3d.com/eos/web/images/scada.json?scope="+params.id);
            this.http.get("http://pz.webcity3d.com/eos/web/images/scada.json?scope="+params.id).toPromise().then( response => {
                let a = response.json().scada;
                this.link =  ['/scada',a];
            });
        })
    }
}