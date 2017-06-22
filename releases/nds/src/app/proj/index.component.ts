/**
 * 首页
 * 由于地图背景不确定，暂时用高德地图替代
 * 暂时将地图初始化写到组件初始化渲染方法中，后续更换地图后将分离到单独组件
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
declare var AMap: any;
declare var echarts: any;
declare var provinces: any;
 

@Component({
    moduleId: 'proj-index',
    selector: 'app-root',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
})
export class ProjcIndexComponent implements OnInit {
    clickedScope: any = {
        name: "全国",
        id: 1
    };
   

    constructor(public route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((v:any) => {
            console.log(v.id);
            console.log(v.s);
            this.changeScope(v.id);
        });
        var map = new AMap.Map('allmap',{
            resizeEnable: false,
            dragEnable: false,
            doubleClickZoom: false,
            zoom: 10,
            center: [116.480983, 40.0958]
        });
        map.setZoom(5);
        map.setCenter([116.39,39.9]);
        map.setFeatures(['bg','road'])//多个种类要素显示 

 
                



      
////////////////////////////////////





////////////////////////////////////
    }



    changeScope(scope) {
        this.clickedScope.name = scope;
        console.log('changeScope');      
    }
}