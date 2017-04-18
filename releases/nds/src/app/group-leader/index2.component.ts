/**
 * 集团领导项目首页
 */
import { Component, OnInit } from '@angular/core';
declare var BMap: any;
declare var echarts: any;
 

@Component({
    moduleId: 'big-client-index2',
    selector: 'app-root',
    templateUrl: 'index2.component.html',
    styleUrls: ['index2.component.css'],
})
export class GroupIndex2Component implements OnInit {
    ngOnInit() {
        // 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 36.915), 6);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放




    //========================
     

var option = {
    color: ['#9bbb59'],
 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '6%',
        containLabel: true,
        tooltip: {
            
        formatter: '{a},{b}'
 
            
        }
    },
    xAxis : [
        {
            
            type : 'category',
            data : ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6'],
 
        }
    ],
    yAxis : [
        {
            name : 'MW',
            type : 'value',
            nameLocation: 'middle',
            nameGap: 30
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '40%',
            data:[10, 52, 200, 334, 390, 330]
        }
    ]
};
 var myChart = echarts.init(document.getElementById('tt1'));  
           
            myChart.setOption( option); 




var option1 = {
    color: ['#9bbb59'],
 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '6%',
        containLabel: true
    },
    xAxis : [
        {
            
            type : 'category',
            data : ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6'],
 
        }
    ],
    yAxis : [
        {
            name : '小时',
            type : 'value',
            nameLocation: 'middle',
            nameGap: 30
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '40%',
            data:[10, 52, 200, 334, 390, 330]
        }
    ]
};
 var myChart = echarts.init(document.getElementById('tt2'));  
           
            myChart.setOption( option1); 


  var option2 = {
    color: ['#9bbb59'],
 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '6%',
        containLabel: true
    },
    xAxis : [
        {
            
            type : 'category',
            data : ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6'],
 
        }
    ],
    yAxis : [
        {
            name : '万元',
            type : 'value',
            nameLocation: 'middle',
            nameGap: 30
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '40%',
            data:[10, 52, 200, 334, 390, 330]
        }
    ]
};
 var myChart = echarts.init(document.getElementById('tt3'));  
           
            myChart.setOption( option2); 



    //============================
    }
}