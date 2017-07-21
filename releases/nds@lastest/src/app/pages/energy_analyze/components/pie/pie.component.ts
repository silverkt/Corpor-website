/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, Input, OnInit} from "@angular/core";
import { PieComponent } from "../../../../components/pie/pie.component";
import { ChartOpt } from "./chart.option";

import { DataService1 } from "./data.service";
declare var echarts: any;
declare var globalvar: any;

@Component({
    moduleId: 'energy-test',
    selector: 'energy-test',
    template: `<div id={{htmlID}} class="pie-energy-structure"></div>
    `,
    styles:[`    
        .pie-energy-structure{    
            height: 100px;
            width: 100px;
        }    
    `],
    providers:[ DataService1 ], 
})
export class PieAnalyzeComponent extends PieComponent{ 
    constructor(data: DataService1) {
        super(data);
    }
}