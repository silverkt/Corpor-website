/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, AfterViewInit, Input } from "@angular/core";
import { DataService } from "./data.service";
 
 
@Component({
    moduleId: 'energy-circle',
    selector: 'energy-circle',
    template: `
                <div  >
                    <div class="outcircle"><div class="innercircle"><bR>节标煤量<bR>263.1t</div></div>
                    <div class="outcircle"><div class="innercircle"><bR>Co2减排量<bR>263.1t</div></div>
                    <div class="outcircle"><div class="innercircle"><bR>综合减排量<bR>263.1t<bR></div></div>
                     
                </div> 
    `,
    styles:[`    
     
        span {
            float: left;
            text-align: center;
            padding:20px;
           
        }  
        
        .outcircle {
            width:130px;
            height:130px;
            background-color:#006fbb;
            border-radius:130px;
            padding:10px;
            float: left;
            margin-right:20px;
        }
        .innercircle {
            width:110px;
            height:110px;
            background-color:#fff;
            border-radius:110px;
             text-align: center;
             padding:20px;
        }
    `],
    providers:[ DataService ], 
})
export class EnergyCircleComponent implements AfterViewInit{    
    public flag: boolean = true;
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
        this.data_api = "http://222.222.120.72:8080/reds-rest/webapi/socialeffect?scope="+ this.scope;
        this.getComData(this.data_api);        
    }
    get scope(): string {
        return this._scope;
    }

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: DataService) {
             
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