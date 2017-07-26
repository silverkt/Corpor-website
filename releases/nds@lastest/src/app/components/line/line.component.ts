/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, Input, OnInit} from "@angular/core";
import { ChartOpt } from "./chart.option";

import { DataService } from "../../data.service";
declare var echarts: any;
declare var globalvar: any;

@Component({
    moduleId: 'energy-structure3',
    selector: 'energy-structure3',
    template: `<div id={{htmlID}} class="line-energy-structure"></div>
    `,
    styles:[`    
        .line-energy-structure{    
            height: 150px;
            width: 1000px;
        }    
    `],
    providers:[ DataService ], 
})
export class LineComponent{ 
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


    protected refreshComponent() {
        this.htmlID = 'line'+this.rqfor+this.ascope+this.tscope;     
        this.refreshUrl();
        this.getComponentData().then(()=>{
            this.renderChart();
        });
    }

    protected refreshUrl() {
        this.url = globalvar.api[1].url+"?rqforline="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }

    protected getComponentData(): Promise<any> {
        return this.data.getData(this.url).then(response => {
            let lineJson = response.json();
            //this.option.title.text = lineJson.title;
            this.option.legend.data = lineJson.data_type;  
            this.option.xAxis.name = lineJson.x_line.name;
            this.option.xAxis.data = lineJson.x_line.data;
            this.option.yAxis.name = lineJson.y_line.name;
            this.option.series = lineJson.y_line.series;       
        }).catch(()=>{
            console.log('Server\'s data service is down!');
        });
    }

    protected renderChart() {
        let myChart = echarts.init(document.getElementById(this.htmlID));
        myChart.setOption(this.option);   
    }
}