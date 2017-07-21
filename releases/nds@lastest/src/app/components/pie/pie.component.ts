/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, Input, OnInit} from "@angular/core";
import { ChartOpt } from "./chart.option";

import { DataService } from "./data.service";
declare var echarts: any;
declare var globalvar: any;

@Component({
    moduleId: 'energy-structure',
    selector: 'energy-structure',
    template: `<div id={{htmlID}} class="pie-energy-structure"></div>
    `,
    styles:[`    
        .pie-energy-structure{    
            height: 450px;
            width: 430px;
        }    
    `],
    providers:[ DataService ], 
})
export class PieComponent{ 
    /**时间范围 
     * @总累计: 1
     * @当年：2
     * @当月：3
     * @当日：4
    */
    private _tscope;
    @Input()
    set tscope(tscope: string) {
        this._tscope = tscope;
    }
    get tscope(): string {
        this._tscope = this._tscope ? this._tscope : "1"; 
        return this._tscope;
    }
    
    /**地域范围 
     * @全国：1
     * @区域：id
     * @省：id
     * @市：id
     * @站：id
    */
    private _ascope;
    @Input()
    set ascope(ascope: string) {
        this._ascope = ascope;
    }
    get ascope(): string {
        this._ascope = this._ascope ? this._ascope : "1";
        return this._ascope; 
    }
    
    /**请求内容 
     * 总体能源：1
     * 清洁能源：2
     * 可再生能源：3
    */
    private _rqfor;
    @Input()
    set rqfor(rqfor: string) { 
        this._rqfor = rqfor;       
        this.refreshComponent();
    }
    get rqfor(): string {
        this._rqfor = this._rqfor ? this._rqfor : "1";
        return this._rqfor;
    }

    /**后端数据请求api */
    public url: string; 

    public htmlID;
    
 
    public pie: any;
    public option: any = {};
    public _scope: string;

    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
 

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: DataService) {
        this.option = ChartOpt;            
     }


    /**
     * 从后端获取数据方法
     * 利用注入服务内方法getTradePieData 获取饼图对应数据
     * 并且更新初始化配置
     */


    private refreshComponent() {
        this.htmlID = 'pie'+this.rqfor+this.ascope+this.tscope;     
        this.refreshUrl();
        this.getComponentData().then(()=>{
            this.renderChart();
        });
    }

    private refreshUrl() {
        this.url = globalvar.api[0].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }

    private getComponentData(): Promise<any> {
        return this.data.getData(this.url).then(response => {            
            let pieJson = response.json().struct;
            let pieData: Array<any> = [];
            pieJson.forEach(element => {
                pieData.push({"name": element.name,"value": element.percent});
            });
            this.option.series[0].data = pieData;
            this.option.title.text = response.json().title;
        });
    }

    private renderChart() {
        let myChart = echarts.init(document.getElementById(this.htmlID));
        myChart.setOption(this.option);   
    }
}