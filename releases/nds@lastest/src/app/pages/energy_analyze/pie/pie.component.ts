/**
 * 饼图图表组件
 * 此组件内包含三个部分
 * 组件本身的controller部分和图表的配置文件部分以及组件获取后端数据服务部分
 */
import { Component, Input, OnInit} from "@angular/core";
import { PieComponent } from "../../../components/pie/pie.component";
import { ChartOpt } from "./chart.option";
import { DataService } from "../../../data.service";
declare var echarts: any;
declare var globalvar: any;

@Component({
    moduleId: 'pie-analyze',
    selector: 'pie-analyze',
    template: `<div id={{htmlID}} class="pie-energy-structure"></div>
    `,
    styles:[`    
        .pie-energy-structure{    
            height: 170px;
            width: 200px;
        }      
    `],
    providers:[ DataService ], 
})
export class PieAnalyzeComponent extends PieComponent{ 
    constructor(data: DataService) {
        super(data);
        this.option = ChartOpt;   
    }
    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[0].url+"?rqfor2="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }
}