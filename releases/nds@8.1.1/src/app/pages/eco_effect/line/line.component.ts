/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, Input, OnInit} from "@angular/core";
import { ChartOpt } from "./chart.option";
import { LineComponent } from "../../../components/line/line.component";
import { DataService } from "../../../data.service";
declare var echarts: any;
declare var globalvar: any;

@Component({
    moduleId: 'line-eco',
    selector: 'line-eco',
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
export class LineEcoComponent extends LineComponent{ 
    constructor(data: DataService) {
        super(data);
        this.option = ChartOpt;   
    }
    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[4].url+"?rqfor=ecotrend"+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }
}