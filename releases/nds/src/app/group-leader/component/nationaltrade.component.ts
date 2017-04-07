import { Component, AfterViewInit, Input } from "@angular/core";

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
    option1: any = {};
    private _scope: string;
    @Input() 
    set scope(scope: string) {
        this._scope = scope;
        this.option = NationalTradePie; 
        this.option1 = NationalTradeLine;
        this.getComData();        
    }
    get scope(): string {
        return this._scope;
    }

    constructor(private data: GpleaderDataService) { }
    ngAfterViewInit() {
        // this.option = NationalTradePie; 
        // this.option1 = NationalTradeLine;
        // this.getComData();
    }

    getComData() {
        this.data.getTradePieData(this._scope).then(response => {
            var myChart = echarts.init(document.getElementById('nationaltrade1'));         
            this.option.series[0].data = response.json().pie;
            myChart.setOption(this.option);        
        }); 

        this.data.getTradeLineData(this._scope).then(response => {
            var myChart = echarts.init(document.getElementById('nationaltrade2'));         
            this.option1.xAxis.data = response.json().linex;
            this.option1.series[0].data = response.json().liney1;
            this.option1.series[1].data = response.json().liney2;         
            myChart.setOption(this.option1);        
        });          

    }
}