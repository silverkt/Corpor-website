import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'energy-map',
    template: `<div  id="energy-map"></div>`,
    styles: [`
        #energy-map{
                
              height:540px;
              background-color: #024272;
              
          }
    `],
})
export class EnergymapComponent {
    option: Object;
    constructor() {
                                                                                        this.option =  {
                                                                                            backgroundColor: '#013c64',
                                                                                            textStyle: {
                                                                                                color: 'rgba(255, 255, 255, 1)'
                                                                                            },
                                                                                            title: {
                                                                                                
                                                                                                padding:[5,0,0,30],
                                                                                                text: '能源站数量(个)',
                                                                                                textStyle: {
                                                                                                color: 'rgba(255, 255, 255, 1)'
                                                                                                },
                                                                                            },
                                                                                            tooltip: {},
                                                                                //            legend: {
                                                                                //                data:['能源站个数']
                                                                                //            },
                                                                                            grid: {
                                                                                        left: '13%',
                                                                                        right: '3%',
                                                                                        bottom: '3%',
                                                                                        
                                                                                        containLabel: true
                                                                                    },
                                                                                            xAxis: {
                                                                                                data: ["浙江","江苏","山东"],
                                                                                                axisLine: {
                                                                                                    lineStyle: {
                                                                                                        color: 'rgba(255, 255, 255, 1)'
                                                                                                    }

                                                                                                }
                                                                                            },
                                                                                            yAxis: {
                                                                                                axisLine: {
                                                                                                    lineStyle: {
                                                                                                        color: 'rgba(255, 255, 255, 1)'
                                                                                                    }

                                                                                                }
                                                                                            },
                                                                                            series: [{
                                                                                                name: '能源站个数',
                                                                                                type: 'bar',
                                                                                                data: [140,70,40],
                                                                                                itemStyle: {
                                                                                                    normal: {
                                                                                                        color: '#f1f07c'
                                                                                                    },
                                                                                                    emphasis: {
                                                                                                        color: '#cccb69'
                                                                                                    }
                                                                                                }
                                                                                            }]
                                                                                        };
    }
    ngOnInit(): void {
           // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('energy-map'));

        // 指定图表的配置项和数据
        

        console.log(this.option);

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
         
    }
}