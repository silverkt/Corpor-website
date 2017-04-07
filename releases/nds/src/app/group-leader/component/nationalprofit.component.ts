import { Component, AfterViewInit, Input } from "@angular/core";

import { NationalProfitLine } from "./nationalprofit.line.option";
import { NationalProfitPie } from "./nationalprofit.pie.option";

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
})
export class NationalProfitComponent implements AfterViewInit{
    option: any = {};
    option1: any = {};
    ngAfterViewInit() {
        this.option = NationalProfitPie;
        this.option1 = NationalProfitLine


var myChart = echarts.init(document.getElementById('nationalprofit1'));        
myChart.setOption(this.option);  


var myChart = echarts.init(document.getElementById('nationalprofit2'));         
myChart.setOption(this.option1);  







    }
}