import { Component, AfterViewInit, Input } from "@angular/core";

import { NationalProfitLine } from "./nationalprofit.line.option";
import { NationalProfitPie } from "./nationalprofit.pie.option";

import { GpleaderDataService } from "../data.service";
declare var echarts: any;

@Component({
    moduleId: 'national-profit',
    selector: 'national-profit',
    template: `
                <div class="row">
                    <div class="col-md-6" id="nationalprofit1"></div>
                    <div class="col-md-6" id="nationalprofit2"></div>
                </div>     
    `,
    styles: [`
        .col-md-6 {    
            height: 230px;
        }   
    `], 
    providers: [ GpleaderDataService ],
})
export class NationalProfitComponent implements AfterViewInit{
    option: any = {};
    option1: any = {};
    public _scope: string;
    @Input()
    set scope(scope: string) {
        this._scope = scope;
        this.option = NationalProfitPie;
        this.option1 = NationalProfitLine;
        this.getComData();  
    }
    get scope() {
        return this._scope;
    }

    constructor( public data: GpleaderDataService ) { }

    ngAfterViewInit() {    

    }

    getComData() {
        this.data.getProfitPieData(this.scope).then(response => {
            var myChart = echarts.init(document.getElementById('nationalprofit1'));  
            this.option.series[0].data = response.json().pie;
            myChart.setOption(this.option); 
        });

        this.data.getProfitLineData(this.scope).then(response => {
            var myChart = echarts.init(document.getElementById('nationalprofit2')); 
            this.option1.xAxis.data = response.json().linex;
            this.option1.series[0].data = response.json().liney;        
            myChart.setOption(this.option1);              
        });
    }
}