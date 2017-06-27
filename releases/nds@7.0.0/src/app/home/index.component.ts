/**
 * 首页
 * 由于地图背景不确定，暂时用高德地图替代
 * 暂时将地图初始化写到组件初始化渲染方法中，后续更换地图后将分离到单独组件
 */
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EnnDataService } from "./enn.data.service";
declare var AMap: any;
declare var echarts: any;
declare var provinces: any;
 

@Component({
    moduleId: 'home-index',
    selector: 'app-root',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
    providers: [EnnDataService],
})
export class HomeIndexComponent implements OnInit {
    clickedScope: any = {
        name: "全国",
        id: 1
    };
    public _scope: string;
    public data_api: string;
    public map: any;
    @Input()
    set scope(scope: string) {
        this._scope = scope;
        // let api = "http://pz.webcity3d.com/eos/web/images/list.json?scope="+ this.scope;
        // this.getComData(api);        
    }
    get scope() {
        return this._scope;
    }
   

    constructor(public router: Router, public data: EnnDataService ) {
        this._scope = '1'; //全国
        this.data_api = "http://pz.webcity3d.com/eos/web/images/list.json?sscope="+ this._scope;
         
     }

    ngOnInit() {
       
        this.map = new AMap.Map('allmap',{
            resizeEnable: false,
            dragEnable: false,
            doubleClickZoom: false,
            zoom: 10,
            center: [116.480983, 40.0958]
        });


        this.map.setZoom(5);
        this.map.setCenter([116.39,39.9]);
        this.map.setFeatures(['bg','road'])//多个种类要素显示 
        this.getComData(this.data_api)
        
 
    }


    getComData(api: string) {
        let outerThis = this.router;

        this.data.getData(api).then(response => {
            let list: any = response.json().struct;
            list.forEach(element => {
                let local = [element.longitude, element.latitude];
                console.log(local);
                let marker = new AMap.Marker({
                    icon: 'assets/xinaoicon.png',
                    position: local          
                })
                marker.setMap(this.map);
                marker.on('click',function(){
                    console.log(element.id+'shanghaiclicked'); 
                    outerThis.navigate(['/proj', element.id, element.name]);           
                })
            });


          
        }); 
        
    }



    changeScope() {
        this.clickedScope.name = "山东";
        console.log('changeScope');      
    }
}