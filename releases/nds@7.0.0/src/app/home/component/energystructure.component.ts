/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, AfterViewInit, Input } from "@angular/core";
import { EnergyStructurePie } from "./energystructure.pie.option";

import { EnnDataService } from "../enn.data.service";
declare var echarts: any;

@Component({
    moduleId: 'energy-structure',
    selector: 'energy-structure',
    template: `<div *ngIf="flag" style="text-align:center; font-size:16px;font-weight:bold; padding:15px; color:#00b0f0;"><span  *ngFor="let item of pie">{{item.name +' '+ item.value + item.unit}}&nbsp;&nbsp;</span></div>
                <div class="row" >
                    <div class="col-md-6" id="homeEnergyStructure1"></div>
                    <div class="col-md-6" id="homeEnergyStructure2"></div>
                </div> 
    `,
    styles:[`    
        .col-md-6 {    
            height: 230px;
        }    
    `],
    providers:[ EnnDataService ], 
})
export class EnergyStructureComponent implements AfterViewInit{ 
    flag: boolean = false;
    public pie: any;
    public option: any = {};
    public _scope: string;

    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
    @Input() 
    set scope(scope: string) {
        this._scope = scope;
        this.option.api = "http://222.222.120.72:8080/reds-rest/webapi/energystruct?scope="+ this.scope;
        this.getComData('homeEnergyStructure1', this.option.api, this.option).then(response => {
            this.pie = response;
            this.flag = true;
        });
         
        this.option.api = "http://222.222.120.72:8080/reds-rest/webapi/reuseenergy?scope="+ this.scope;
        this.getComData('homeEnergyStructure2', this.option.api, this.option);          
    }
    get scope(): string {
        return this._scope;
    }

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: EnnDataService) {
        this.option = EnergyStructurePie; 
         
     }
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
    getComData(htmlLabel: string, api: string, chartOption: any): Promise<any>  {  
                 
    return this.data.getData(api).then(response => {
            var myChart = echarts.init(document.getElementById(htmlLabel));
            var pie = response.json().struct; 
            let pieData: Array<any> = [];
            pie.forEach(element => {
                pieData.push({"name": element.name,"value": element.percent});
            });        
            chartOption.series[0].data = pieData;
            chartOption.title.text = response.json().title;
            myChart.setOption(chartOption);            
            return pie;    
        }); 
        

        // this.data.getData(this.option1.api).then(response => {
        //     var myChart = echarts.init(document.getElementById('homeEnergyStructure2'));         
        //     this.option.series[0].data = response.json().pie;
        //     myChart.setOption(this.option1);       
        // });          

    }
}