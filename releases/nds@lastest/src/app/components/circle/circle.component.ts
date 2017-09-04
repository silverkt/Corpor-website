/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, Input, OnInit, AfterViewInit} from "@angular/core";
 
import { DataService } from "../../data.service";
 
declare var globalvar: any;
 
 
@Component({
    moduleId: 'energy-circle',
    selector: 'energy-circle',
    template: `
                
                    <div class="outcircle" id={{htmlID}}><div class="innercircle"><bR>{{option.title}}<bR>{{option.value}}{{option.unit}}</div></div>
                    
                     
                
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
export class CircleComponent {    
    ngAfterViewInit() {
        this.refreshComponent();
    }
    /**时间范围 
     * @总累计: 1
     * @当年：2
     * @当月：3
     * @当日：4
    */
    private _tscope;
    @Input()
    set tscope(tscope: string) {
        this._tscope = tscope;
         
    }    
    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
    get tscope(): string {
        this._tscope = this._tscope ? this._tscope : "1"; 
        return this._tscope;
    }
    
    /**地域范围 
     * @全国：1
     * @区域：id
     * @省：id
     * @市：id
     * @站：id
    */
    private _ascope;
    @Input()
    set ascope(ascope: string) {
        this._ascope = ascope;
            
    }
    get ascope(): string {
        this._ascope = this._ascope ? this._ascope : "1";
        return this._ascope; 
    }
    
    /**请求内容 
     * 总体能源：1
     * 清洁能源：2
     * 可再生能源：3
    */
    private _rqfor;
    @Input()
    set rqfor(rqfor: string) { 
        this._rqfor = rqfor;       
       
    }
    get rqfor(): string {
        this._rqfor = this._rqfor ? this._rqfor : "1";
        return this._rqfor;
    }

    /**后端数据请求api */
    public url: string; 

    /**模板id 以便js getElementByID获取 */
    public htmlID;
    
    /**图表配置对象 json格式 */
    public option: any = {
                "title": "节煤标量",
                "value": "263.1",
                "unit":"吨"
            };

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: DataService) {
       // this.refreshComponent();
     }

    /**
     * 当有输入scope范围发生变化的时候，更新组件数据
     * 包含更新向api请求的url参数
     * 包含重新请求api对应数据
     * 包含重新渲染当前图表
     */
    protected refreshComponent() {
        this.htmlID = 'circle'+this.rqfor+this.ascope+this.tscope;     
        this.refreshUrl();
        this.getComponentData();
    }

    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[5].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
    }

    /**
     * 请求api对应数据
     */
    protected getComponentData(): Promise<any> {
        return this.data.getData(this.url).then(response => {            
            let circleJson = response.json();
            this.option.title  = circleJson.title;
            this.option.value = circleJson.value;
            this.option.unit = circleJson.unit;
        }).catch(()=>{
            console.log('Server\'s data service is down!');
            this.option = {
                "title": "节煤标量",
                "value": "263.1",
                "unit":"吨"
            }
        });
    }
 
}