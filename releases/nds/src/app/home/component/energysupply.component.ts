/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, AfterViewInit, Input } from "@angular/core";
//import { EnergyStructurePie } from "./energystructure.pie.option";

import { EnnDataService } from "../enn.data.service";
 

@Component({
    moduleId: 'energy-supply',
    selector: 'energy-supply',
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
 
    public _scope: string;
    public data_api: string;

    public pt1: any;
    public pt2: any;
    public pt3: any;
    public pt0: any;

    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
    @Input() 
    set scope(scope: string) {
        this._scope = scope;
        this.data_api = "http://pz.webcity3d.com/eos/web/images/suply.json?scope="+ this.scope;
        this.getComData();        
    }
    get scope(): string {
        return this._scope;
    }

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: EnnDataService) {
             
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
        this.data.getData(this.data_api).then(response => {
            this.pt0 =  response.json().pt[0];
            this.pt1 =  response.json().pt[1];
            this.pt2 =  response.json().pt[2];
            this.pt3 =  response.json().pt[3];     
        }); 

          

    }
}