import { Component,AfterViewInit } from "@angular/core";

import { NationalTradeLine } from "./nationaltrade.line.option";
import { NationalTradePie } from "./nationaltrade.pie.option";

import { GpleaderDataService } from "../data.service";
declare var echarts: any;

@Component({
    moduleId: 'national-trade',
    selector: 'national-trade',
    template: `
                <div class="row">
                    <div class="col-md-6" id="nationaltrade1"></div>
                    <div class="col-md-6" id="nationaltrade2"></div>
                </div> 
    `,
    styles:[`    
        .col-md-6 {    
            height: 230px;
        }    
    `],
    providers:[ GpleaderDataService ],
})
export class NationalTradeComponent implements AfterViewInit{
    option: any = {};

    constructor(private data: GpleaderDataService) { }
    ngAfterViewInit() {
    //百度chart  pie
    // 指定图表的配置项和数据
    this.option = NationalTradePie;
    var myChart = echarts.init(document.getElementById('nationaltrade1'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.option);
    this.data.getPieData();



    //百度chart   grid
    var myChart = echarts.init(document.getElementById('nationaltrade2'));
    // 指定图表的配置项和数据     
    this.option = NationalTradeLine;
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.option);


    }
}