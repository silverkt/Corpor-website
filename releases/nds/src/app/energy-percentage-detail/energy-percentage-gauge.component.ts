import { Component, Input, AfterViewInit } from "@angular/core";

import { GaugeOption } from "./energy-percentage-gauge.option";
import { PercentageDetailData } from "./percentage-data.service";

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
    `],
    providers: [PercentageDetailData]
})
export class EnergyPercentageGaugeComponent implements AfterViewInit{
    @Input() timeScope: string; //当年， 当月， 当日
    @Input() type: string; //综合能源利用率， co2减排率， 节能率， 清洁能源利用率
    @Input() scope: string; //区域 ： 全国， 某地区

    option: any = {};
    //data: any;

    constructor(private data: PercentageDetailData){}

    ngAfterViewInit(): void {
        this.option = GaugeOption;
        this.option.title.text = this.timeScope+ this.scope + this.type;
        this.option.series[0].data[0] = {
            value: this.data.getGaugeData(this.timeScope, this.scope, this.type).percentage
        }; // 设置仪表盘数据
        var myChart: any = 'energy-percentage-gauge-'+this.scope + this.type + this.timeScope;
        myChart = echarts.init(document.getElementById(myChart));
        myChart.setOption(this.option);

       


    }
}