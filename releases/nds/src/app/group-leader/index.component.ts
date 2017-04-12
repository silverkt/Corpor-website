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
    rank : Array<any> = [
            {
                "id":"1",
                "region": "华北",
                "benifit": "500",
                "percent": "60%"
            },
            {
                "id":"2",
                "region": "华北",
                "benifit": "500",
                "percent": "60%"
            },
            {
                "id":"3",
                "region": "华北",
                "benifit": "500",
                "percent": "60%"
            },
            {
                "id":"4",
                "region": "华北",
                "benifit": "500",
                "percent": "60%"
            },
            {
                "id":"5",
                "region": "华北",
                "benifit": "500",
                "percent": "60%"
            },
            {
                "id":"6",
                "region": "华北",
                "benifit": "500",
                "percent": "60%"
            }
        ];

    constructor(private zone: NgZone) { }

    ngOnInit() {
        // 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 36.915), 6);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放   
////////////////////////////////////

var myChart = echarts.init(document.getElementById('tt1'));         
var option = {
    title: {
                text: ' ',
                x: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                }
            },
    color: ['#9bbb59','#b3a2c7','#00b0f0', '#8eb4e3'],
    series: [{
        name: '多能源成交占比',
        type: 'pie',
        radius: [0,'60%'],
        label: {
            normal: {
                formatter: '{b}{d}%',
            }
        },
        labelLine: {
            normal: {
                length: 5,
                length2: 5,
            }
        },
        data: [{name:'其他',value:10},{name:'华东',value:10},{name:'华北',value:60},{name:'山东',value:20}]
    }]

}
myChart.setOption(option);        



////////////////////////////////////
    }



    changeScope() {
        this.clickedScope.name = "山东";
        console.log('changeScope');      
    }
}