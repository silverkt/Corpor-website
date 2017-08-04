import { Component, Input } from "@angular/core";
import { DataService } from "../../data.service";
declare var globalvar: any;
@Component({
    moduleId: 'compnent-list',
    template: ``,
    styles: [''],
    providers: [DataService]
})
export class ListComponent {
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
     * 综合排名：1
     * 经济性排名：2
     * 能效排名：3
     * 生态排名：4
    */
    private _rqfor;
    @Input()
    set rqfor(rqfor: string) { 
        this._rqfor = rqfor;       
        this.refreshComponent();
    }
    get rqfor(): string {
        this._rqfor = this._rqfor ? this._rqfor : "1";
        return this._rqfor;
    }

    /**后端数据请求api */
    public url: string; 

    public htmlID;
    
 
   
    public option: any;
 

    /**
     * 通过get方法监听输入属性scope的变化，变化时初始化子组件配置
     * 而后调用后端获取数据方法
     */
 

    /**
     * 构造函数，注入数据服务
     */
    constructor(public data: DataService) {  
               
     }


    /**
     * 从后端获取数据方法
     * 利用注入服务内方法getTradePieData 获取饼图对应数据
     * 并且更新初始化配置
     */


    protected refreshComponent() {
        this.htmlID = 'list'+this.rqfor+this.ascope+this.tscope;     
        this.refreshUrl();
        this.getComponentData().then(()=>{
            this.renderChart();
        });
    }

    protected refreshUrl() {
        this.url = globalvar.api[7].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }

    protected getComponentData(): Promise<any> {
        return this.data.getData(this.url).then(response => {
            this.option = response.json();               
        }).catch(()=>{
            console.log('Server\'s data service is down!');
        });
    }

    protected renderChart() {
 
    }
}