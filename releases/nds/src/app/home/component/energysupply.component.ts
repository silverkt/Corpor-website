/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, AfterViewInit, Input } from "@angular/core";
import { EnnDataService } from "../enn.data.service";
 

@Component({
    moduleId: 'energy-supply',
    selector: 'energy-supply',
    template: `
                <div class="row">
                    <div class="col-md-12" id="home-energy-supply"> 
                    <div *ngIf="flag">sdfasdf </div>
                    </div>
                     
                </div> 
    `,
    styles:[`    
        .col-md-12 {    
            height: 230px;
        }    
    `],
    providers:[ EnnDataService ], 
})
export class EnergySupplyComponent implements AfterViewInit{    
    public flag: boolean = false;
    public _scope: string;
    public data_api: string;
    public list: any;

    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
    @Input() 
    set scope(scope: string) {
        this._scope = scope;
        this.data_api = "http://pz.webcity3d.com/eos/web/images/supply.json?scope="+ this.scope;
        this.getComData(this.data_api);        
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
    getComData(api: string) {         
        this.data.getData(api).then(response => {
            console.log(response.json());
            this.list = response.json();
            this.flag = true;
        }); 

          

    }
}