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
    template: `
                <div class="row">
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
        this.option.api = "http://pz.webcity3d.com/eos/web/images/pie.json?scope="+ this.scope;
        this.option1.api = "http://pz.webcity3d.com/eos/web/images/pie.json?scope="+ this.scope;
        this.getComData();        
    }
    get scope(): string {
        return this._scope;
    }

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: EnnDataService) {
        this.option = EnergyStructurePie; 
        this.option1 = EnergyStructurePie;        
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
    getComData() {
         
        this.data.getData(this.option.api).then(response => {
            var myChart = echarts.init(document.getElementById('homeEnergyStructure1'));         
            this.option.series[0].data = response.json().pie;
            myChart.setOption(this.option);        
        }); 

        this.data.getData(this.option1.api).then(response => {
            var myChart = echarts.init(document.getElementById('homeEnergyStructure2'));         
            this.option.series[0].data = response.json().pie;
            myChart.setOption(this.option1);       
        });          

    }
}