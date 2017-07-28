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
export class StationsIndexComponent implements OnInit {
    public area: any=[];
    public obj: any;
    public menucontent: any;
 
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
    }
    get scope() {
        return this._scope;
    }
   

    constructor(public router: Router, public data: EnnDataService ) {
        this._scope = '1'; //全国
        this.data_api = "http://222.222.120.72:808/reds-rest/webapi/stationlist?scope="+ this._scope;
         
     }

    ngOnInit() {     
        this.map = new AMap.Map('allmap',{
            resizeEnable: true,
            dragEnable: true,
            doubleClickZoom: false,
            zoom: 10,
            center: [116.480983, 40.0958]
        });


        this.map.setZoom(5.3);
        this.map.setCenter([116.39,39.9]);
        //this.map.setFeatures(['bg','road'])//多个种类要素显示 
        this.getComData(this.data_api)

        /**获取全国scada列表 */
        this.data.getData('http://222.222.120.72:808/reds-rest/webapi/scadalist').then((res:any)=>{
        var jsonabj = res.json();            
           this.obj = jsonabj; 
           /**获取全国市场区域*/     
            for (let x in jsonabj) {
                this.area.push(x);
            }  
        });

 
        
 
    }


    getComData(api: string) {
        let outerThis = this.router;
        this.data.getData(api).then(response => {
            let list: any = response.json().struct;
            list.forEach(element => {
                let local = [element.longitude, element.latitude];
                let icons = new AMap.Icon({
                    size: new AMap.Size(25,25),
                    image: 'assets/xinaoicon.png'
                });
                let marker = new AMap.Marker({
                    icon: icons,
                    position: local,
                    label: {
                        content: element.name,
                        offset: new AMap.Pixel(30,-10)
                    }          
                })
                marker.setMap(this.map);
                marker.on('click',function(){
                    console.log(element.id+'clicked'); 
                    outerThis.navigate(['/scada', 'http://10.38.128.14:2500/'+element.id+'.htm',]);           
                })
            });


          
        }); 
        
    }



    changeScope() {
        this.clickedScope.name = "山东";
        console.log('changeScope');      
    }

    /**全国市场区域列表内容渲染 */
    zoneMenu(zone: string) {
        console.log(zone+"click");
        /**某市场区域内泛能站列表内容渲染 */
        this.menucontent = this.obj[zone];
    }

    /**点击某泛能站项后跳转导航 */
    routerChange(scada) {
        this.router.navigate(['/scada',scada]);  
    }


}