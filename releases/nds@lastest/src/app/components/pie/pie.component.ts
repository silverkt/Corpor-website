/**
 * 饼图图表组件
 * 此组件内包含三个部分
 * 组件本身的controller部分和图表的配置文件部分以及组件获取后端数据服务部分
 */
import { Component, Input, OnInit} from "@angular/core";
import { ChartOpt } from "./chart.option";
import { DataService } from "../../data.service";
declare var echarts: any;
declare var globalvar: any;

@Component({
    moduleId: 'silver-pie',
    selector: 'silver-pie',
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
        this.refreshComponent();
    }    
    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
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
        this.refreshComponent();        
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

    /**模板id 以便js getElementByID获取 */
    public htmlID;
    
    /**图表配置对象 json格式 */
    public option: any = {};

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: DataService) {
        this.option = ChartOpt;            
     }

    /**
     * 当有输入scope范围发生变化的时候，更新组件数据
     * 包含更新向api请求的url参数
     * 包含重新请求api对应数据
     * 包含重新渲染当前图表
     */
    protected refreshComponent() {
        this.htmlID = 'pie'+this.rqfor+this.ascope+this.tscope;     
        this.refreshUrl();
        this.getComponentData().then(()=>{
            this.renderChart();
        });
    }

    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[0].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
    }

    /**
     * 请求api对应数据
     */
    protected getComponentData(): Promise<any> {
        return this.data.getData(this.url).then(response => {            
            let pieJson = response.json().struct;
            let pieData: Array<any> = [];
            pieJson.forEach(element => {
                pieData.push({"name": element.name,"value": element.percent});
            });
            this.option.series[0].data = pieData;
            this.option.title.text = response.json().title;
        }).catch(()=>{
            console.log('Server\'s data service is down!');
        });
    }

    /**
     * 渲染当前图表
     */
    protected renderChart() {
        let myChart = echarts.init(document.getElementById(this.htmlID));
        myChart.setOption(this.option);   
    }
}