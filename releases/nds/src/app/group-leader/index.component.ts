import { Component, OnInit } from '@angular/core';
declare var BMap: any;
declare var echarts: any;
 

@Component({
    moduleId: 'big-client-index',
    selector: 'app-root',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
})
export class GroupIndexComponent implements OnInit {
    ngOnInit() {
        // 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 36.915), 6);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放


    //百度chart  pie
     var myChart = echarts.init(document.getElementById('nationaltrade1'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '多能源成交占比',
                x: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                }
            },
            color: ['#9bbb59','#b3a2c7','#00b0f0', '#8eb4e3']
            ,
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
                data: [{name:'其他',value:10},{name:'燃气',value:10},{name:'电力',value:60},{name:'冷/热',value:20}]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);



         //百度chart   grid
     var myChart = echarts.init(document.getElementById('nationaltrade2'));

        // 指定图表的配置项和数据
        var option2 = {
            grid: {
                show: true,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['2/4','2/6','2/8','2/10','2/12','2/14'],
                axisLabel: {
                    interval: 0
                }
            },
            yAxis: {
                name: '交易量/MW',
                nameLocation: 'middle',
                type: 'value'
            },
            series: [
                {
                    name:'交易量/MW',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230]
                },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option2);



    }
}