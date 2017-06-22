/**
 * 首页
 * 由于地图背景不确定，暂时用高德地图替代
 * 暂时将地图初始化写到组件初始化渲染方法中，后续更换地图后将分离到单独组件
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var AMap: any;
declare var echarts: any;
declare var provinces: any;
 

@Component({
    moduleId: 'home-index',
    selector: 'app-root',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
})
export class HomeIndexComponent implements OnInit {
    clickedScope: any = {
        name: "全国",
        id: 1
    };
   

    constructor(public router: Router ) { }

    ngOnInit() {
       
        let outerThis = this.router;
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


        for(let i=0; i<34; i+=3) {
            let marker = new AMap.Marker({
                icon: 'assets/xinaoicon.png',
                position: provinces[i].center.split(',')             
            })
            marker.setMap(map);
            marker.on('click',function(){
                console.log(i+'shanghaiclicked'); 
                outerThis.navigate(['/proj', i, 'tt']);           
            })
        }
                



      
////////////////////////////////////





////////////////////////////////////
    }



    changeScope() {
        this.clickedScope.name = "山东";
        console.log('changeScope');      
    }
}