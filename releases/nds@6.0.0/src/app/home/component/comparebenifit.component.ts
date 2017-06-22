/**
 * 项目收益对比对比组件
 * 此组件包含柱状图组件
 */
import { Component, AfterViewInit, Input } from "@angular/core";
import { CompareBenifitBar } from "./comparebenifit.bar.option";

import { GpleaderDataService } from "../data.service";
declare var echarts: any;

@Component({
    moduleId: 'compare-benifit',
    selector: 'compare-benifit',
    template: `
        <div class="compare-benifit" id="compare-benifit">  
        </div>
    `,
    styles: [`
        .compare-benifit {
            width: 100%;
            height: 100%;
        }
    `],
    providers: [ GpleaderDataService ]
})
export class CompareBenifitComponent implements AfterViewInit{
    option: any = CompareBenifitBar;
    _scope: string;
    
    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */    
    @Input()
    set scope(scope) {
        this._scope = scope;
        this.getComData();
    }
    get scope() {
        return this._scope;
    }

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: GpleaderDataService ) { }

    ngAfterViewInit() { }

    /**
     * 从后端获取数据方法
     * 利用注入服务内方法获取对应数据
     * 并且更新初始化配置
     */
    getComData() {
        this.data.getCompareBenifitData(this.scope).then(response=>{
            this.option.xAxis[0].data = response.json().barx;
            this.option.series[0].data = response.json().bary;
            var myChart = echarts.init(document.getElementById('compare-benifit'));  
            myChart.setOption(this.option); 
        });
    }
}