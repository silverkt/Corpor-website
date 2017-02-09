import { Component, OnInit } from '@angular/core';

import { geoCoordMap } from './energy.map.component.geodata';
import { mapOption } from './energy.map.component.option';

declare var echarts: any;

@Component({
    moduleId: module.id,
    selector: 'energy-map',
    template: `<div class ="energy-title" >{{title}}</div><div  id="energy-map"></div>`,
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
            window.location.href="./prov/"+params.name;   
            //window.location.href="./heroes/"+params.name;         
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
                                    {name: "莱芜", value: 1},
                                    {name: "常德", value: 1},
                                    {name: "保定", value: 1},
                                    {name: "湘潭", value: 1},
                                    {name: "金华", value: 1},
                                    {name: "岳阳", value: 1},
                                    {name: "长沙", value: 1},
                                    {name: "衢州", value: 1},
                                    {name: "廊坊", value: 1},
                                    {name: "菏泽", value: 1},
                                    {name: "合肥", value: 1},
                                    {name: "武汉", value: 1},
                                    {name: "大庆", value: 1}
                    ],
                    ongoing:    [
                                    {name: "海门", value: 2},
                                    {name: "鄂尔多斯", value: 2},
                                    {name: "招远", value: 2},
                                    {name: "舟山", value: 2},
                                    {name: "齐齐哈尔", value: 2},
                                    {name: "盐城", value: 2},
                                    {name: "赤峰", value: 2},
                                    {name: "青岛", value: 2},
                                    {name: "乳山", value: 2},
                                    {name: "大庆", value: 2}
                    ],
                    onplan:     [
                                    {name: "鞍山", value: 3},
                                    {name: "溧阳", value: 3},
                                    {name: "库尔勒", value: 3},
                                    {name: "安阳", value: 3},
                                    {name: "开封", value: 3},
                                    {name: "济南", value: 3},
                                    {name: "德阳", value: 3},
                                    {name: "温州", value: 3},
                                    {name: "九江", value: 3},
                                    {name: "邯郸", value: 3},
                                    {name: "临安", value: 3},
                                    {name: "兰州", value: 3},
                                    {name: "沧州", value: 3}

                    ]

                };
    }
}