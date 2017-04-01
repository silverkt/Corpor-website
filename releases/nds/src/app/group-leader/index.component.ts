import { Component, OnInit, NgZone } from '@angular/core';
declare var BMap: any;
declare var echarts: any;
 

@Component({
    moduleId: 'big-client-index',
    selector: 'app-root',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
})
export class GroupIndexComponent implements OnInit {
    clickedScope: any = {
        name: "全国",
        id: 1
    };

    constructor(private zone: NgZone) { }

    ngOnInit() {
        // 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 36.915), 6);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放   

    }

    changeScope() {
        this.clickedScope.name = "山东";
        console.log('changeScope');      
    }
}