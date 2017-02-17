import { Component, AfterViewInit, Input } from "@angular/core";

import { GridlineOption } from './energy-percentage-gridline.option';

declare var echarts: any;

@Component({
    moduleId: module.id,
    selector: 'energy-percentage-gridline',
    template: `<div id='energy-percentage-gridline-{{scope+type+timeScope}}' class='energy-percentage-gridline'></div>`,
    styles: [`
         .energy-percentage-gridline
        {
              width: 100%;             
              height: 269px;
        }
    `]
})
export class EnergyPercentageGridlineComponent implements AfterViewInit {
    @Input() timeScope: string; //当年， 当月， 当日
    @Input() type: string; //综合能源利用率， co2减排率， 节能率， 清洁能源利用率
    @Input() scope: string; //区域 ： 全国， 某地区

    option: any =  {};
    ngAfterViewInit(){
        this.option = GridlineOption;
        this.option.title.text = this.timeScope+ this.scope + this.type;
        var myChart: any = 'energy-percentage-gridline-'+this.scope + this.type + this.timeScope;
        myChart = echarts.init(document.getElementById(myChart));
        myChart.setOption(this.option);
    }
}
