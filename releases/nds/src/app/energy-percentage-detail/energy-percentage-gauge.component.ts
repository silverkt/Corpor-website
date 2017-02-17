import { Component, Input, AfterViewInit } from "@angular/core";

import { GaugeOption } from "./energy-percentage-gauge.option";
declare var echarts: any;

@Component({
    moduleId: module.id,
    selector: 'energy-percentage-gauge',
    template:`<div id='energy-percentage-gauge-{{scope+type+timeScope}}' class='energy-percentage-gauge'></div>`,
    styles:[`
        .energy-percentage-gauge
        {
              width: 100%;             
              height: 269px;
        }
    `]
})
export class EnergyPercentageGaugeComponent implements AfterViewInit{
    @Input() timeScope: string; //当年， 当月， 当日
    @Input() type: string; //综合能源利用率， co2减排率， 节能率， 清洁能源利用率
    @Input() scope: string; //区域 ： 全国， 某地区

    option: any = {};
    data: any;

    ngAfterViewInit(): void {
        this.option = GaugeOption;
        this.option.title.text = this.timeScope+ this.scope + this.type;
        var myChart: any = 'energy-percentage-gauge-'+this.scope + this.type + this.timeScope;
        myChart = echarts.init(document.getElementById(myChart));
        myChart.setOption(this.option);

       


    }
}