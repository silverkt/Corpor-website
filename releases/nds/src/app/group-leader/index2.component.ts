/**
 * 集团领导项目首页
 */
import { Component, OnInit } from '@angular/core';
declare var AMap: any;
declare var echarts: any;
 

@Component({
    moduleId: 'big-client-index2',
    selector: 'app-root',
    templateUrl: 'index2.component.html',
    styleUrls: ['index2.component.css'],
})
export class GroupIndex2Component implements OnInit {
    clickedScope: any = {
        name: "全国",
        id: 1
    };
    ngOnInit() {
        // 百度地图API功能
         var map = new AMap.Map('allmap',{
            resizeEnable: true,
            zoom: 10,
            center: [116.480983, 40.0958]
        });
        map.setZoom(5);
        map.setCenter([116.39,39.9]);
        map.setFeatures(['bg','road'])//多个种类要素显示 



    //========================
 

 


    //============================
    }
}