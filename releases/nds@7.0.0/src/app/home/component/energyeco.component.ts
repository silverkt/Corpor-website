/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, AfterViewInit, Input } from "@angular/core";
import { EnnDataService } from "../enn.data.service";
 

@Component({
    moduleId: 'energy-eco',
    selector: 'energy-eco',
    template: `
                <div class="row">
                    <div class="col-md-12" id="home-energy-supply"> 
                        <div *ngIf="flag" >
                            <div class="title" style="margin-top:20px; margin-bottom:10px;">{{list.title}}</div>




                            <span *ngFor="let item of list.struct">
                            
<div style="width:130px; background-color:#ececec; float:left;margin-right:10px;padding:10px; border-radius:5px;">
<div style="font-size:12px; font-weight:bold; background-color:#715389;color:#fff;border-radius:5px;padding:5px;">{{item.name}}</div>
<div style="padding-top:10px;">{{item.value}}</div>
<div style="font-size:10px; font-weight:bold;">{{item.unit}}</div>
</div>                            
                           </span>
                        </div>
                    </div>
                     
                </div> 
    `,
    styles:[`    
        .col-md-12 {    
            
        }
        .title {
            font-size: 20px;
            font-weight:bold;
            text-align: center;
        }
        span {
       
        }    
    `],
    providers:[ EnnDataService ], 
})
export class EnergyEcoComponent implements AfterViewInit{    
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
        if(scope==' ') {
            this.data_api = "http://222.222.120.72:808/reds/webapi/ecoeffect";
        } else {
            this.data_api = "http://222.222.120.72:808/reds/webapi/ecoeffect/"+ this.scope;
        }        
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
            this.list = response.json();
            this.flag = true;
        }); 

          

    }
}