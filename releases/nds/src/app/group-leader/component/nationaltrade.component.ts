/**
 * 全国泛能交易情况组件
 * 此组件内包含两个子组件
 * 全国凡能交易饼图组件和全国凡能交易双曲线组件
 */
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
    public _scope: string;

    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
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

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: GpleaderDataService) { }
    ngAfterViewInit() {
        // this.option = NationalTradePie; 
        // this.option1 = NationalTradeLine;
        // this.getComData();
    }

    /**
     * 从后端获取数据方法
     * 利用注入服务内方法getTradePieData 获取饼图对应数据
     * 并且更新初始化配置
     */
    getComData() {
        this.data.getTradePieData(this.scope).then(response => {
            var myChart = echarts.init(document.getElementById('nationaltrade1'));         
            this.option.series[0].data = response.json().pie;
            myChart.setOption(this.option);        
        }); 

        this.data.getTradeLineData(this.scope).then(response => {
            var myChart = echarts.init(document.getElementById('nationaltrade2'));         
            this.option1.xAxis.data = response.json().linex;
            this.option1.series[0].data = response.json().liney1;
            this.option1.series[1].data = response.json().liney2;         
            myChart.setOption(this.option1);        
        });          

    }
}