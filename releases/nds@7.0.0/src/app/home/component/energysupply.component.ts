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
                        <div *ngIf="flag">
                            <div class="title" style="margin-top:20px; margin-bottom:10px;">{{list.title}}</div>

<div style="background-color:#838d58; border-radius:5px; width:250px;height:80px;padding:15px; float:left;margin-right:50px;">
<div style=" color:#fff; float:left;width:50px;height:50px;font-size:32px;"><i class="icon-fire"></i></div>
<div style=" color:#fff; float:left;"><div style="border-bottom-style:solid; border-bottom-width:1px;border-bottom-color:#fff;font-size:16px;padding-bottom:5px;">{{list.struct[0].name}} {{list.struct[0].unit}}</div><div style="text-align:left;padding-top:5px;">{{list.struct[0].value}}</div></div>
</div>


<div style="background-color:#6fa652; border-radius:5px; width:250px;height:80px;padding:15px;float:left;">
<div style=" color:#fff; float:left;width:50px;height:50px;font-size:32px;"><i class="icon-bolt"></i></div>
<div style=" color:#fff; float:left;"><div style="border-bottom-style:solid; border-bottom-width:1px;border-bottom-color:#fff;font-size:16px;padding-bottom:5px;">{{list.struct[1].name}} {{list.struct[1].unit}}</div><div style="text-align:left;padding-top:5px;">{{list.struct[1].value}}</div></div>
</div>


<div style="background-color:#039d91; border-radius:5px; width:250px;height:80px;padding:15px; float:left;margin-right:50px;margin-top:20px;">
<div style=" color:#fff; float:left;width:50px;height:50px;font-size:32px;"><i class="icon-tint"></i></div>
<div style=" color:#fff; float:left;"><div style="border-bottom-style:solid; border-bottom-width:1px;border-bottom-color:#fff;font-size:16px;padding-bottom:5px;">{{list.struct[2].name}} {{list.struct[2].unit}}</div><div style="text-align:left;padding-top:5px;">{{list.struct[2].value}}</div></div>
</div>


<div style="background-color:#22a86d; border-radius:5px; width:250px;height:80px;padding:15px;float:left;margin-top:20px;">
<div style=" color:#fff; float:left;width:50px;height:50px;font-size:32px;"><i class="icon-asterisk"></i></div>
<div style=" color:#fff; float:left;"><div style="border-bottom-style:solid; border-bottom-width:1px;border-bottom-color:#fff;font-size:16px;padding-bottom:5px;">{{list.struct[3].name}} {{list.struct[3].unit}}</div><div style="text-align:left;padding-top:5px;">{{list.struct[3].value}}</div></div>
</div>


                           <!--   <span *ngFor="let item of list.struct">

                            
                     {{item.name}}<br>{{item.value}}<br>{{item.unit}}</span>  -->
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
            float: left;
            text-align: center;
            padding-left: 40px;
            padding-top:20px;
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
        this.data_api = "http://222.222.120.72:8080/reds-rest/webapi/supplyanalyze?scope="+ this.scope;
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