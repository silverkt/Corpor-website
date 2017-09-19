/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, Input, OnInit} from "@angular/core";
 
declare var AMap: any;

@Component({
    moduleId: 'all-map',
    selector: 'all-map',
    template: `<div id="all-map" class="all-map"></div>
    `,
    styles:[`    
        .all-map{    
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin:0;font-family:"微软雅黑";
        }    
    `],
    providers:[ ], 
})
export class MapComponent implements OnInit{
    public map: any;
    ngOnInit(){
                this.map = new AMap.Map('all-map',{
            resizeEnable: true,
            dragEnable: true,
            doubleClickZoom: false,
            zoom: 10,
            center: [116.480983, 40.0958]
        });


        this.map.setZoom(5.3);
        this.map.setCenter([116.39,39.9]);
        //this.map.setFeatures(['bg','road'])//多个种类要素显示 
 
    } 
  
}