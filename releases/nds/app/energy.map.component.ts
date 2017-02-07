import { Component, OnInit } from '@angular/core';

import { geoCoordMap } from './energy.map.component.geodata';
import { mapOption } from './energy.map.component.option';

declare var echarts: any;

@Component({
    moduleId: module.id,
    selector: 'energy-map',
    template: `<div class ="energy-title">{{title}}</div><div  id="energy-map"></div>`,
    styles: [`
        .energy-title {
            height: 50px;
            background-color: #024272;
            color: #FFFFFF; 
            text-align: center;
            padding: 10px;
            font-size: 28px;
            font-weight: bold;
        }
        #energy-map{
                
              height:490px;
              background-color: #024272;
              
          }
    `],
})
export class EnergymapComponent {
    title: string = "全国3D轮廓图";
    option: any = {};
    geomap: any = {};
    data: any = {};
    
    constructor() {
        // 指定图表的配置项和数据
        //配置信息开始
        this.geomap = geoCoordMap;
        this.option = mapOption;
        this.data = this.getServiceData();       
        this.option.series[0].data = this.convertData(this.data.accomplish);
        this.option.series[1].data = this.convertData(this.data.ongoing);
        this.option.series[2].data = this.convertData(this.data.onplan);
        //console.log(this.option);
        //console.log(this.option.series[0].data); 
         //配置信息结束
    }

    ngOnInit(): void {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('energy-map'));
        //console.log(this.option);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
        myChart.on('click', function (params: any) {
            console.log(params.name);
            window.location.href="./heroes/"+params.name;         
        });          
    }

    convertData(data: Array<any>): Array<any> {
        var res: Array<any> = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = this.geomap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    }

    getServiceData(): any {
        return {
                    accomplish: [
                                    {name: "莱芜", value: 148},
                                    {name: "常德", value: 152},
                                    {name: "保定", value: 153},
                                    {name: "湘潭", value: 154},
                                    {name: "金华", value: 157},
                                    {name: "岳阳", value: 169},
                                    {name: "长沙", value: 175},
                                    {name: "衢州", value: 177},
                                    {name: "廊坊", value: 193},
                                    {name: "菏泽", value: 194},
                                    {name: "合肥", value: 229},
                                    {name: "武汉", value: 273},
                                    {name: "大庆", value: 279}
                    ],
                    ongoing:    [
                                    {name: "海门", value: 9},
                                    {name: "鄂尔多斯", value: 12},
                                    {name: "招远", value: 12},
                                    {name: "舟山", value: 12},
                                    {name: "齐齐哈尔", value: 14},
                                    {name: "盐城", value: 15},
                                    {name: "赤峰", value: 16},
                                    {name: "青岛", value: 18},
                                    {name: "乳山", value: 18},
                                    {name: "大庆", value: 279}
                    ],
                    onplan:     [
                                    {name: "鞍山", value: 86},
                                    {name: "溧阳", value: 86},
                                    {name: "库尔勒", value: 86},
                                    {name: "安阳", value: 90},
                                    {name: "开封", value: 90},
                                    {name: "济南", value: 92},
                                    {name: "德阳", value: 93},
                                    {name: "温州", value: 95},
                                    {name: "九江", value: 96},
                                    {name: "邯郸", value: 98},
                                    {name: "临安", value: 99},
                                    {name: "兰州", value: 99},
                                    {name: "沧州", value: 100}

                    ]

                };
    }
}