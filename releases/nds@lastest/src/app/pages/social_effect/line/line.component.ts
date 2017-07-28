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
    moduleId: 'line-social',
    selector: 'line-social',
    template: `<div id={{htmlID}} class="line-energy-structure"></div>
    `,
    styles:[`    
        .line-energy-structure{    
            height: 150px;
            width: 800px;
        }     
    `],
    providers:[ DataService ], 
})
export class LineSocialComponent extends LineComponent{ 
    constructor(data: DataService) {
        super(data);
        this.option = ChartOpt;   
    }
    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[6].url+"?rqfor2="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }
}