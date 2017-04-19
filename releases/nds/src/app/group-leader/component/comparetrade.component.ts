/**
 * 泛能交易对比组件
 */
import { Component, AfterViewInit, Input } from "@angular/core";
import { CompareTradeBar } from "./comparetrade.bar.option";

import { GpleaderDataService } from "../data.service";
declare var echarts: any;

@Component({
    moduleId: 'compare-trade',
    selector: 'compare-trade',
    template: `
        <div class="compare-trade" id="tt1">  
        </div>
    `,
    styles: [`
        .compare-trade {
            width: 100%;
            height: 100%;
        }
    `],
    providers: [ GpleaderDataService ]
})
export class CompareTradeComponent implements AfterViewInit{
    _scope: string;
    @Input()
    set scope(scope) {
        this._scope = scope;
        console.log(this._scope);
    }
    get scope() {
        return this._scope;
    }

    constructor(public data: GpleaderDataService ) { }
    ngAfterViewInit() {            
var option = CompareTradeBar;
    var myChart = echarts.init(document.getElementById('tt1'));  
        myChart.setOption( option); 
    }
}